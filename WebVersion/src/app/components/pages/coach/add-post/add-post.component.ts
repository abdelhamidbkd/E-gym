import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/app/components/models/Article';
import { Coach } from 'src/app/components/models/Coach';
import { Sport } from 'src/app/components/models/Sport';
import { ArticleService } from 'src/app/components/services/ModlesServices/article.service';
import { CoachService } from 'src/app/components/services/ModlesServices/coach.service';
import { ScheduleService } from 'src/app/components/services/ModlesServices/schedule.service';
import { SportService } from 'src/app/components/services/ModlesServices/sport.service';
import { NotificationService } from 'src/app/components/services/notification.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  show_load:boolean=false
  pathFile:String;
  Filetype:string;
  pathCimage:String;
  user:string;
  coach=new Coach()
  sport=new Sport()
  CoachName:string
  article=new Article();

  @ViewChild("#show_loading") MyPropp: ElementRef;

  constructor(private coachService:CoachService,
    private sportService:SportService
    ,private articleService:ArticleService,
    private schedService:ScheduleService,
    private angf:AngularFireStorage,
    private matDialog: MatDialog,
   private notification:NotificationService,) { }
   
  ngOnInit(): void {
    this.getCoachInfos()


  }

  getCoachInfos(){
    this.user=sessionStorage.getItem('CodeCo');

    this.coachService.getCoachByCode(this.user).subscribe(
     data=>{this.coach=data;
      this.CoachName=this.coach.firstname+" "+this.coach.lastname
            this.sportService.getSportById(data.sportId).subscribe(dataa=>this.sport=dataa)
          } )      
  }

  uploadFile($event){
    this.pathFile=$event.target.files[0]
    this.Filetype=$event.target.files[0].type.split('/')[1];
  }

  uploadCoverImage($event){
    this.pathCimage=$event.target.files[0]
  }
  registerPost(addPost:NgForm){
     this.show_load=true 
     setTimeout(() => {   
    this.MyPropp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });},250)


this.article=addPost.value;
if(addPost.invalid){  this.show_load=false;    this.notification.showNotification('top','center','Please fill all the required fields','danger');    }
else{
  this.angf.upload("post/"+this.article.title+"/article" ,this.pathFile).then((snapshot) => {
    this.angf.upload("post/"+this.article.title+"/cover" ,this.pathCimage).then((snapshott) => {
      this.angf.ref("post/"+this.article.title+"/article").getDownloadURL().subscribe(
        data=>{
          this.article.articefile=data;
          this.angf.ref("post/"+this.article.title+"/cover").getDownloadURL().subscribe(
            dataa=>{
              this.article.articecoverimage=dataa
              this.article.coachId=this.coach.coachId
              this.article.fileType= this.Filetype;
              console.log(  this.article.fileType ,this.Filetype )
              this.articleService.addArticle(this.article).subscribe(
                response=>{
                  if(response){ this.notification.showNotification('top','center','Post has been successfully Puclished','success'); 
                  window.location.reload();
                }
                if(!response){
                  this.angf.ref("post/"+this.article.title+"/cover").delete();
                  this.angf.ref("post/"+this.article.title+"/article").delete();
                  this.notification.showNotification('top','center','Title already exist!!!','danger'); 
                  this.show_load=false
                }
                }
              )


            }

          )


        }


      )

    })
  })
}


}
}
