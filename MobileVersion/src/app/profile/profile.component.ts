import { Component, NgModule, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {MemberService} from '../Services/member.service'
import { Member} from '../models/Member'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScheduleService } from '../Services/schedule.service';
import  * as $ from "jquery";
import { SubscriptionService } from '../Services/subscription.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: string;
  member= new Member();
  constructor(  private router: Router
    ,public alertController: AlertController,
    private schedService:ScheduleService,
    private subService:SubscriptionService,
  
    private memberService:MemberService ) { }
  
    
  ngOnInit() {
    this.getMemberInfos()

  }

  getMemberInfos(){

    this.user=sessionStorage.getItem('Code');

    this.memberService.getMemberByMemberCode(this.user).subscribe(
     data=>{this.member=data;
      if(data.subscriptionId==null){this.member.subscriptionName="Costumized";}
   else{ this.subService.getSubById(data.subscriptionId).subscribe(dataa=>this.member.subscriptionName=dataa.nameSub);} }

          )}  

  }




