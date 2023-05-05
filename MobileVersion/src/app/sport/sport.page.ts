import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { Sport } from '../models/Sport';
import { ArticleService } from '../Services/article.service';
import { CoachService } from '../Services/coach.service';
import { MemberService } from '../Services/member.service';
import { ScheduleService } from '../Services/schedule.service';
import { SportService } from '../Services/sport.service';
import { SubscriptionService } from '../Services/subscription.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {
  @Input() Sport: Sport;

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
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
