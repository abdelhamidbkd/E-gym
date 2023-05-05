import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Coach } from '../../models/Coach';
import { Sport } from '../../models/Sport';
import { Room } from '../../models/Room';
import { RoomService } from '../../services/ModlesServices/room.service';
import { CoachService } from '../../services/ModlesServices/coach.service';
import { SportService } from '../../services/ModlesServices/sport.service';
import { SubscriptionService } from '../../services/ModlesServices/subscription.service';
import { NotificationService } from '../../services/notification.service';
import { EditCoachComponent } from './edit-coach/edit-coach.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { EditSportComponent } from './edit-sport/edit-sport.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  AllSports:Sport[];
  AllCoachs:Coach[];
  AllRooms:Room[];

add_sport=false;
add_room=false;
add_coach=false;

constructor(  private router: Router, 
   private angf:AngularFireStorage,
   private matDialog: MatDialog,
  private notification:NotificationService,
  private coachService:CoachService,
  private subService:SubscriptionService,
  private sportService:SportService,
  private roomService:RoomService,

  
  ) { }


  ngOnInit(): void {
    this.getallSport();
    this.getallRoom();
    this.getallCoach();

  }
  @ViewChild("show") MyProp: ElementRef;

  cancel(){
    this.add_sport=false;
    this.add_room=false;
    this.add_coach=false;

  }

  add(section){
if(section=="sport"){
  this.add_sport=true;
  this.add_room=false;
  this.add_coach=false;
  this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
}
if(section=="room"){
  this.add_sport=false;
  this.add_room=true;
  this.add_coach=false;
  this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });

}
if(section=="coach"){
  this.add_sport=false;
    this.add_room=false;
    this.add_coach=true;
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });

}

  }
 
  openDialogEdit_Coach(coach:Coach) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=coach;
    this.matDialog.open(EditCoachComponent, dialogConfig);
  }
  Delete_Coach(coach:Coach){
    
    this.angf.refFromURL(coach.coachimage).delete()

    this.coachService.deleteCoach(coach.coachId).subscribe(response=>this.ngOnInit())}



  openDialogEdit_Room(room:Room) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=room;
    this.matDialog.open(EditRoomComponent, dialogConfig);
  }
  Delete_Room(room:Room){this.roomService.deleteRoom(room.roomId).subscribe(response=>this.ngOnInit())}


  openDialogEdit_Sport(spor:Sport) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=spor;
    this.matDialog.open(EditSportComponent, dialogConfig);
  }
  Delete_Sport(sport:Sport){
    this.angf.refFromURL(sport.sportimage).delete()

    this.sportService.deleteSport(sport.sportId).subscribe(response=>this.ngOnInit())}

  getallSport(){this.sportService.getAllsports().subscribe(data=>this.AllSports=data)}
    
  getallRoom(){this.roomService.getAllRooms().subscribe(data=>this.AllRooms=data)}

  getallCoach(){this.coachService.getAllCoachs().subscribe(data=>{this.AllCoachs=data
    for (let co of this.AllCoachs) {
      this.sportService.getSportById(co.sportId).subscribe(data=>co.sportname=data.nameSp)

    }
  }
    )}


}
