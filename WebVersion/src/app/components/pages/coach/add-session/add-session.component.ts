import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Article } from 'src/app/components/models/Article';
import { Coach } from 'src/app/components/models/Coach';
import { Room } from 'src/app/components/models/Room';
import { Schedule } from 'src/app/components/models/Schedule';
import { Sport } from 'src/app/components/models/Sport';
import { ArticleService } from 'src/app/components/services/ModlesServices/article.service';
import { CoachService } from 'src/app/components/services/ModlesServices/coach.service';
import { ScheduleService } from 'src/app/components/services/ModlesServices/schedule.service';
import { SportService } from 'src/app/components/services/ModlesServices/sport.service';
import { NotificationService } from 'src/app/components/services/notification.service';
import {map, startWith} from 'rxjs/operators';
import { RoomService } from 'src/app/components/services/ModlesServices/room.service';
import  * as $ from "jquery";
import {  MatDialogConfig } from '@angular/material/dialog';
import {AllDatesComponent} from '../all-dates/all-dates.component'
@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  coach=new Coach()
  sport=new Sport()
  user:string;
  CoachName:string
session=new Schedule();

RoomCtrl = new FormControl();
  filteredRooms:Observable<Room[]>;
  rooms: Room[];

  
  constructor(private coachService:CoachService,
    private sportService:SportService,
    private roomService:RoomService
    ,private articleService:ArticleService,
    private schedService:ScheduleService,
    private angf:AngularFireStorage,
    private matDialog: MatDialog,
   private notification:NotificationService,) { }

   ngOnInit(): void {
    this.getCoachInfos()
    this.getAllRooms()

  }

  private _filterRooms(value: string): Room[] {
    const filterValue = value.toLowerCase();
    return this.rooms.filter(state => state.roomName.toLowerCase().indexOf(filterValue) === 0);
    }
    
  getAllRooms() {
this.roomService.getAllRooms().subscribe(data=>{
if(data!=null){ this.rooms=data;
   this.filteredRooms = this.RoomCtrl.valueChanges.pipe( 
      startWith(''),
      map(state => state ? this._filterRooms(state) : this.rooms.slice())
    );
}

})
   
  }

  getCoachInfos(){
    this.user=sessionStorage.getItem('CodeCo');

    this.coachService.getCoachByCode(this.user).subscribe(
     data=>{this.coach=data;
      this.CoachName=this.coach.firstname+" "+this.coach.lastname
            this.sportService.getSportById(data.sportId).subscribe(dataa=>this.sport=dataa)
          } )      
  }

     utc=new Date();
    
  registerSession(addSession:NgForm){    this.session=addSession.value;
   
  
    if(addSession.invalid){      this.notification.showNotification('top','center','Please fill all the required fields','danger');    }
    
   else{   const c=new Date(this.session.sessionDay2)
      if( c.setHours(0,0,0,0)< this.utc.setHours(0,0,0,0)){ this.notification.showNotification('top','center','You can t plan a Session in the past','danger');  } 
     else{
       this.roomService.getRoomByName($("#roomname").val()).subscribe(
         responsee=>{
          if(responsee==null){ this.notification.showNotification('top','center','Room Not found','danger');}
          if(responsee!=null){
            this.session.roomId=responsee.roomId;

            this.session.coachId=this.coach.coachId;
     this.session.sportId=this.sport.sportId;
   this.session.sessionDay=this.session.sessionDay2
    this.schedService.addSession(this.session).subscribe(
       response=>{
        if(response){  this.notification.showNotification('top','center','Session is successfuly planned','success');
        window.location.reload()
      }
        if(!response){  this.notification.showNotification('top','center','Choose another time !!!','danger');}
       }
     )
          }
         }
       )
      
   }
     }   

  }

  openDialogDate() {
    if($("#dayy").val()==""){ this.notification.showNotification('top','center','Pick a Day','danger');}
else{
this.schedService.getAllSchedulesByDay($("#dayy").val()).subscribe(data=>
  {
    if(data.length==0){this.notification.showNotification('top','center','There is no session on this day','danger');}
    if(data.length!=0){
      
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=$("#dayy").val();
    this.matDialog.open(AllDatesComponent, dialogConfig);
    
    }

  }
  
  )

}
    
  }


}
