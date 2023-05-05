import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { Article } from '../models/Article';
import { Sport } from '../models/Sport';
import { ArticleService } from '../Services/article.service';
import { CoachService } from '../Services/coach.service';
import { MemberService } from '../Services/member.service';
import { ScheduleService } from '../Services/schedule.service';
import { SportService } from '../Services/sport.service';
import { SubscriptionService } from '../Services/subscription.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage'; 
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  @Input() Post: Article;

  constructor( 
    private sanitizer: DomSanitizer,    public modalController: ModalController,
      private angf:AngularFireStorage,
    private router: Router
    ,public alertController: AlertController,
    private document: DocumentViewer,
    private schedService:ScheduleService,
    private sportService:SportService,
    private subService:SubscriptionService,
    private articleService:ArticleService,
    private coachService:CoachService,
    private transfer: FileTransfer, private file: File,    private memberService:MemberService ) {
     
      

     }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
download(str:Article){
  const filetransfer: FileTransferObject = this.transfer.create(); 
  if(str.fileType=='mp4'){
    filetransfer.download(str.articefile, '/storage/emulated/0/Download/TrainMoreVideos/' +str.title +'.mp4').then((entry) =>
    { 
            alert('download complete: ' + entry.toURL());
    },
(error) => {
            alert(error);
});

  }
  if(str.fileType=='pdf'){
  filetransfer.download(str.articefile, '/storage/emulated/0/Download/TrainMorePdf/' +str.title +'.pdf').then((entry) =>
          { 
                  alert('download complete: ' + entry.toURL());
          },
 (error) => {
                  alert(error);
});
    
  }

}


 
}
