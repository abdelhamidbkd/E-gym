import { Component, NgModule, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {MemberService} from '../Services/member.service'
import { Member} from '../models/Member'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScheduleService } from '../Services/schedule.service';
import  * as $ from "jquery";

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss'],
})
export class PagesListComponent implements OnInit {
  user: string;
  member= new Member();

  constructor(  private router: Router,public alertController: AlertController,private schedService:ScheduleService,  private memberService:MemberService ) { }

  ngOnInit() {
    this.getMemberInfos()

  }
  goto(page){
    this.router.navigate([page])

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning!! ',
      subHeader: '',
      message: 'You must update your subscription!!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  getMemberInfos(){

    this.user=sessionStorage.getItem('Code');

    this.memberService.getMemberByMemberCode(this.user).subscribe(
     data=>{this.member=data
if(data.status=="Locked"){      this.presentAlert()

$(".tt").empty();
$(".tt").prepend("<h2 style='text-align: center;margin-top: 70%;color: rgb(105, 105, 105);'>Activate your account</h2>")
}
          } )

  }

  logout(){
    sessionStorage.removeItem('Code');
    this.router.navigate([''])
  }

}
