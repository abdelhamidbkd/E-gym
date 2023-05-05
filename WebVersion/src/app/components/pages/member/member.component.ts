import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Member } from '../../models/Member';
import { Schedule } from '../../models/Schedule';
import { ArticleService } from '../../services/ModlesServices/article.service';
import { CoachService } from '../../services/ModlesServices/coach.service';
import { MemberService } from '../../services/ModlesServices/member.service';
import { RoomService } from '../../services/ModlesServices/room.service';
import { ScheduleService } from '../../services/ModlesServices/schedule.service';
import { SportService } from '../../services/ModlesServices/sport.service';
import { NotificationService } from '../../services/notification.service';
import  * as $ from "jquery";
import { ActivateComponent } from './activate/activate.component';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  today=new Date().toJSON().slice(0,10);
  sessions:Schedule[];
  user:string;
member=new Member()
  constructor(private coachService:CoachService,
    private sportService:SportService,
    private memberService:MemberService,
    private articleService:ArticleService,private schedService:ScheduleService,private roomService:RoomService,
    private angf:AngularFireStorage,
    private matDialog: MatDialog,
   private notification:NotificationService,) { }

  ngOnInit(): void {
    this.getMemberInfos()
    this.getSessionsByDate()


  }
  getMemberInfos(){

    this.user=sessionStorage.getItem('CodeMe');

    this.memberService.getMemberByMemberCode(this.user).subscribe(
     data=>{this.member=data
if(data.status=="Locked"){this.notification.showNotification('top','center','Your account is loccked because your Subscription has expired You must subscribe once again !!','danger');    
$(".tt").empty();
$(".tt").prepend("<h2 style='text-align: center;margin-top: 25%;color: rgb(105, 105, 105);'>Activate your account</h2>")
}
          } )

  }

getSessionsByDate(){
    this.schedService.getAllSchedulesByDay(this.today).subscribe(
  data=>{
    if(data.length==0){
      this.notification.showNotification('top','center','No session planned for today','danger');
    }
    if(data!=null){ this.sessions=data;
      for (let ses of this.sessions) {
        this.roomService.getRoomById(ses.roomId).subscribe(dataa=>ses.roomNum=dataa.roomNum)
        this.coachService.getCoachById(ses.coachId).subscribe(dataaa=>ses.coachname=dataaa.firstname+" "+dataaa.lastname)
        this.sportService.getSportById(ses.sportId).subscribe(dataaaa=>ses.sportname=dataaaa.nameSp)

    
      }   
    }
   }
)


}


openDialogEdit_Activate(mee:Member) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data=mee;
  this.matDialog.open(ActivateComponent, dialogConfig);
}
}
