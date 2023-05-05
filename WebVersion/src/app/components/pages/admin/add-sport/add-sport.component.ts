import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Member} from '../../../models/Member';
import {Subscription} from '../../../models/Subscription';
import * as jspdf from 'jspdf';
import {NotificationService} from '../../../services/notification.service';
import {MemberService} from '../../../services/ModlesServices/member.service';
import {SubscriptionService} from '../../../services/ModlesServices/subscription.service';
import { AngularFireStorage } from '@angular/fire/storage'; 
import { Router } from '@angular/router';
import  * as $ from "jquery";
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { CoachService } from 'src/app/components/services/ModlesServices/coach.service';
import { SportService } from 'src/app/components/services/ModlesServices/sport.service';
import { Sport } from 'src/app/components/models/Sport';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.scss']
})
export class AddSportComponent implements OnInit {
  sport=new Sport();
  path:String;

  constructor(  private router: Router,  private angf:AngularFireStorage,
    private notification:NotificationService,private coachService:CoachService,private subService:SubscriptionService,private sportService:SportService) { }
  ngOnInit(): void {
  }


  upload($event){
    this.path=$event.target.files[0]
  }

  registerSport(addCoach:NgForm){    
  this.sport=addCoach.value;
this.angf.upload("sport/"+this.sport.nameSp ,this.path).then((snapshot) => {

    if(addCoach.invalid){      this.notification.showNotification('top','center','Please fill all the required fields','danger');    }
    else{
      this.angf.ref("sport/"+this.sport.nameSp).getDownloadURL().subscribe(
        data=>{
          this.sport.sportimage=data;
         
 this.sportService.addSport(this.sport).subscribe(
        response=>{
          if(response){ 
             this.notification.showNotification('top','center','Sport has been successfully added','success'); 
            
              window.location.reload();
           
          }

          if(!response){
            this.angf.ref("sport/"+this.sport.nameSp).delete();
            this.notification.showNotification('top','center','Sport already exist!!!','danger'); 
          }

        }
      )
        }
      )
     

    }


     });
   
   

  }
  
}
