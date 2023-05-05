import { Component, NgModule, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {MemberService} from '../Services/member.service'
import { Member} from '../models/Member'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScheduleService } from '../Services/schedule.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  member=new Member()
  constructor(private router: Router,private memberService:MemberService,public alertController: AlertController,private schedService:ScheduleService) { }

  ngOnInit() {}


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning!! ',
      subHeader: '',
      message: 'Code Or Password incorrect!!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  checkLogin(signin:NgForm){
    this.member=signin.value

this.memberService.loginMember(this.member).subscribe(response=>
  {
    if(response){         
      this.schedService.deleteold().subscribe();

      this.router.navigate(['allpages'])

       sessionStorage.setItem('Code', this.member.membercode)

  }
  if(!response){
  this.presentAlert()
}
  }
  )

  }
}
