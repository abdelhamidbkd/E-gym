import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Sport } from 'src/app/components/models/Sport';
import  * as $ from "jquery";
import { NotificationService } from 'src/app/components/services/notification.service';
import { SportService } from 'src/app/components/services/ModlesServices/sport.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-edit-sport',
  templateUrl: './edit-sport.component.html',
  styleUrls: ['./edit-sport.component.scss']
})
export class EditSportComponent implements OnInit{
  path: string;
  sportt=new Sport();
  oldimage:string
  constructor(private router: Router,
    private sportService:SportService,
     private angf:AngularFireStorage,
    private notification:NotificationService,
     public dialogRef: MatDialogRef<EditSportComponent>
    , @Inject(MAT_DIALOG_DATA) public spor: Sport ) {
      this.sportt=spor
    this.oldimage=spor.sportimage;
   }
 
   ngOnInit() {
    this.setvalues()

  
   } 
    

   
      
 

  close() {
    this.dialogRef.close();
  }

  upload($event){
    this.path=$event.target.files[0]
  }

  setvalues(){
     $("#nameS").val( this.sportt.nameSp);
      $("#descriptio").val( this.sportt.description);
  }

  editSport(EditSport:NgForm){
   var  sport2=new Sport();
     if( $("#nameS").val()=="" ||  $("#descriptio").val()==""){
      this.notification.showNotification('top','center','Please fill all the required fields','danger');    
     }
     else{
      sport2.sportId=this.sportt.sportId 
      sport2.nameSp=$("#nameS").val();
        sport2.description=$("#descriptio").val();
      if(this.path==undefined){      
          sport2.sportimage=this.sportt.sportimage;
       this.sportService.updateSport(sport2).subscribe(
          response=>{
            if(response){       this.notification.showNotification('top','center','Sport Updated successfuly','success');   
                                this.close();
                                
                              }
            if(!response){      this.notification.showNotification('top','center','Sport Already exist','danger');              }
          }
        )
      }
      if(this.path!=undefined){ 
        sport2.sportimage=this.sportt.sportimage;

        this.angf.refFromURL(this.oldimage).delete()

        this.angf.upload("sport/"+sport2.nameSp ,this.path).then((snapshot) => {
        this.angf.ref("sport/"+sport2.nameSp).getDownloadURL().subscribe(
          data=>{
            sport2.sportimage=data;
          
            this.sportService.updateSport(sport2).subscribe(
              response=>{
                if(response){       this.notification.showNotification('top','center','Sport Updated successfuly','success');   
                                    this.close()
                                     }
                if(!response){      this.notification.showNotification('top','center','Sport Already exist','danger');              }
              }
            )
          })
      })
       
      }
       
      
     

     }
  }
}
