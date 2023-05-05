import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoachService } from '../../services/ModlesServices/coach.service';
import { ArticleService } from '../../services/ModlesServices/article.service';
import { ScheduleService } from '../../services/ModlesServices/schedule.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../services/notification.service';
import { Coach } from '../../models/Coach';
import { Sport } from '../../models/Sport';
import { SportService } from '../../services/ModlesServices/sport.service';
import { Schedule } from '../../models/Schedule';
import { RoomService } from '../../services/ModlesServices/room.service';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  
  add_session_show=false;
  add_post_show=false;
  user:string;
  coach=new Coach()
  sport=new Sport()
  schedules:Schedule[];
  articles:Article[];
  constructor(private coachService:CoachService,
    private sportService:SportService
    ,private articleService:ArticleService,private schedService:ScheduleService,private roomService:RoomService,
    private angf:AngularFireStorage,
    private matDialog: MatDialog,
   private notification:NotificationService,) { }

  ngOnInit(): void {
    this.getCoachInfos()
    

  }

  @ViewChild("show_plan_session") MyProp: ElementRef;
  @ViewChild("show_add_post") MyProp2: ElementRef;
  @ViewChild("info_coach") MyProp3: ElementRef;


  show_session(){

    this.add_post_show=false;
    this.add_session_show=true;
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });

  }

  show_post(){

    this.add_session_show=false;
    this.add_post_show=true;
    this.MyProp2.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });

  }
  cancel(){ 
    this.MyProp3.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    this.add_session_show=false;
    this.add_post_show=false;}


    getCoachInfos(){
      this.user=sessionStorage.getItem('CodeCo');

      this.coachService.getCoachByCode(this.user).subscribe(
       data=>{this.coach=data;
        this.getAllArticles(data.coachId);
        this.getCoachSechedules(data.coachId)
              this.sportService.getSportById(data.sportId).subscribe(dataa=>this.sport=dataa)
            
            } )
         


    }

    getCoachSechedules(id){
          this.schedService.getAllSchedulesByCoachId(id).subscribe(
            data=>{
              if(data!=null){this.schedules=data;
                for (let se of this.schedules) {
            this.roomService.getRoomById(se.roomId).subscribe(data=>{se.roomNum=data.roomNum})
            }}
                if(data==null){

                }

            }
          )  }
        
        
          delete_session(session:Schedule){
this.schedService.deleteById(session.sessionId).subscribe();       
this.notification.showNotification('top','center','Session is canceled','danger');    
this.ngOnInit()
}

delete_Post(ar:Article){
  this.articleService.deleteArticle(ar.articleId).subscribe();  
  this.angf.refFromURL(ar.articecoverimage).delete();
  this.angf.refFromURL(ar.articefile).delete();

  this.notification.showNotification('top','center','Post deleted','danger');    
  this.ngOnInit()
  }

getAllArticles(id){

  this.articleService.getAllArticlesByCoachId(id).subscribe(
    data=>{
      this.articles=data;;

    }
  )
}    

  download(str:Article){
    
    if(str.fileType=="mp4"){
      window.open(str.articefile);
    }
    else{
       this.angf.refFromURL(str.articefile).getDownloadURL().subscribe((url) => {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  })}
   
  }
  
   
  



}
