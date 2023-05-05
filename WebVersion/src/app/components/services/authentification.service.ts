import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Member} from '../models/Member';
import {Subscription} from '../models/Subscription';
import {CoachService} from '../services/ModlesServices/coach.service';

import {NotificationService} from '../services/notification.service';
import {MemberService} from '../services/ModlesServices/member.service';
import {SubscriptionService} from '../services/ModlesServices/subscription.service';
import { AngularFireStorage } from '@angular/fire/storage'; 
import { Router } from '@angular/router';
import { Coach } from '../models/Coach';
import { ScheduleService } from './ModlesServices/schedule.service';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  member=new Member();
  coach=new Coach();

  constructor(   private notification:NotificationService,private router: Router,private memberService:MemberService
   ,  private coachService:CoachService,private schedService:ScheduleService ) {}

checkOldSessions(){
  this.schedService.deleteold().subscribe();
}
  authenticate(code: string, passwd: string) {
    
    if(code=="admin" && passwd=="admin"){
    sessionStorage.setItem('CodeAd', "0000")
    this.router.navigate(['admin'])

  }

   else{
    this.member.password=passwd;
    this.member.membercode=code;
    this.memberService.loginMember(this.member).subscribe(
      response=>{
        if(response){
          this.notification.showNotification('top','center','Welcome Member','success');
          sessionStorage.setItem('CodeMe', code)
          this.router.navigate(['member'])
        }
        if(!response){
          this.coach.coachcode=code;
          this.coach.password=passwd;
          this.coachService.loginCoach(this.coach).subscribe(
                response=>{ if(response){
                  this.notification.showNotification('top','center','Welcome Coach','success');   
                  sessionStorage.setItem('CodeCo', code) 
                  this.router.navigate(['coach'])}
                            if(!response){this.notification.showNotification('top','center','Code Or Password incorrect!!','danger');  }
                            }
                  
          )

        }
      }
    )
   }




  }


  isMemberLoggedIn() {
    let user = sessionStorage.getItem('CodeMe')
    console.log(!(user === null))
    return !(user === null)
  }

  isCoachLoggedIn() {
    let user = sessionStorage.getItem('CodeCo')
    console.log(!(user === null))
    return !(user === null)
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('CodeAd')
    if(user!=="0000"){return false;}
    else{return true;}
  }
  
  logOutMember() {
    sessionStorage.removeItem('CodeMe')
    this.router.navigate([''])

  }
  logOutCoach() {
    sessionStorage.removeItem('CodeCo')
    this.router.navigate([''])
  }
  logOutAdmin() {
    sessionStorage.removeItem('CodeAd')
    this.router.navigate([''])
  }

}
