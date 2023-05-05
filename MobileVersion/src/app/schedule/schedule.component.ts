import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Schedule } from '../models/Schedule';
import { ArticleService } from '../Services/article.service';
import { CoachService } from '../Services/coach.service';
import { MemberService } from '../Services/member.service';
import { RoomService } from '../Services/room.service';
import { ScheduleService } from '../Services/schedule.service';
import { SportService } from '../Services/sport.service';
import { SubscriptionService } from '../Services/subscription.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  today=new Date().toJSON().slice(0,10);
  sessions:Schedule[];

  constructor(  private router: Router
    ,public alertController: AlertController,
    private schedService:ScheduleService,
    private subService:SubscriptionService,
    private articleService:ArticleService,
    private coachService:CoachService,
    private roomService:RoomService,
    private sportService:SportService,
    private memberService:MemberService ) { }

  ngOnInit() {
this.GetSessionsByDay();
  }


  GetSessionsByDay(){
      this.schedService.getAllSchedulesByDay(this.today).subscribe(
    data=>{console.log(data)
      if(data.length==0){this.presentAlert()
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


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning!! ',
      subHeader: '',
      message: 'No sessions today!!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
