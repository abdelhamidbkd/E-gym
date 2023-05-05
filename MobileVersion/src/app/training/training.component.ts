import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Article } from '../models/Article';
import { PostPage } from '../post/post.page';
import { ArticleService } from '../Services/article.service';
import { CoachService } from '../Services/coach.service';
import { MemberService } from '../Services/member.service';
import { ScheduleService } from '../Services/schedule.service';
import { SubscriptionService } from '../Services/subscription.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  articles:Article[]
  constructor(
    public modalController: ModalController,
    private router: Router
    ,public alertController: AlertController,
    private schedService:ScheduleService,
    private subService:SubscriptionService,
    private articleService:ArticleService,
    private coachService:CoachService,

    private memberService:MemberService ) { }
   
  ngOnInit() {this.getArticles()
  
  }


  getArticles(){

    this.articleService.getAllArticlesByType('Training').subscribe(
      data=>{this.articles=data;
      for (let art of this.articles) {
        this.coachService.getCoachById(art.coachId).subscribe(dataa=>art.coachName=dataa.firstname+" "+dataa.lastname)
      }
    }
    )
  }

  read(item:Article){
    this.presentModal(item)
    
    
      }



      async presentModal(post:Article) {
        const modal = await this.modalController.create({
          component: PostPage,
          cssClass: 'my-custom-class',
          componentProps: {
            'Post': post,
            
          }
        });
        return await modal.present();
      }
   // Declare the variable (in this case and initialize it with false)
   isItemAvailable = false;
   items = [];

   initializeItems(){
       this.items = this.articles;
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
               return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
           })
       } else {
           this.isItemAvailable = false;
       }
   }
}
