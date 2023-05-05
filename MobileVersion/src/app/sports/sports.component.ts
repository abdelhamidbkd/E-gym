import { Component, NgModule, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {MemberService} from '../Services/member.service'
import { Member} from '../models/Member'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScheduleService } from '../Services/schedule.service';
import  * as $ from "jquery";
import { SubscriptionService } from '../Services/subscription.service';
import { ArticleService } from '../Services/article.service';
import { Article } from '../models/Article';
import { CoachService } from '../Services/coach.service';
import { Sport } from '../models/Sport';
import { SportService } from '../Services/sport.service';
import { SportPage } from '../sport/sport.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent implements OnInit {

  sports:Sport[]
  constructor( 
    public modalController: ModalController,
    private router: Router
    ,public alertController: AlertController,
    private schedService:ScheduleService,
    private sportService:SportService,
    private subService:SubscriptionService,
    private articleService:ArticleService,
    private coachService:CoachService,

    private memberService:MemberService ) { }

  ngOnInit() {
    this.getSports()
  }
  getSports() {

    this.sportService.getAllsports().subscribe(
      data=>{this.sports=data;
   
    }
    )

  }
  read(item:Sport){
    this.presentModal(item)
    
    
      }



      async presentModal(sport:Sport) {
        const modal = await this.modalController.create({
          component: SportPage,
          cssClass: 'my-custom-class',
          componentProps: {
            'Sport': sport,
            
          }
        });
        return await modal.present();
      }


   // Declare the variable (in this case and initialize it with false)
   isItemAvailable = false;
   items = [];

   initializeItems(){
       this.items = this.sports;
   }

   getItems(ev: any) {
       // Reset items back to all of the items
       this.initializeItems();

       // set val to the value of the searchbar
       const val = ev.target.value;

       // if the value is an empty string don't filter the items
       if (val && val.trim() !== '') {
           this.isItemAvailable = true;
           this.items = this.items.filter((item) => {
               return (item.nameSp.toLowerCase().indexOf(val.toLowerCase()) > -1);
           })
       } else {
           this.isItemAvailable = false;
       }
   }

}
