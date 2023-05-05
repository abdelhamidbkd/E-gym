import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Member} from '../../models/Member';
import {Subscription} from '../../models/Subscription';
import {AuthentificationService} from '../../services/authentification.service';

import {NotificationService} from '../../services/notification.service';
import {MemberService} from '../../services/ModlesServices/member.service';
import {SubscriptionService} from '../../services/ModlesServices/subscription.service';
import { AngularFireStorage } from '@angular/fire/storage'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
   member=new Member();
  constructor(   private notification:NotificationService,private router: Router,
    private loginservice: AuthentificationService   ) { }

  ngOnInit(): void {
  }
  checkLogin(signin:NgForm) {
    this.member=signin.value;
    if(this.member.membercode=="" || this.member.password==""){ this.notification.showNotification('top','center','Please fill all the required fields','danger');}
  else{
    this.loginservice.checkOldSessions();
    this.loginservice.authenticate(this.member.membercode,this.member.password );} 
  
  }
}
