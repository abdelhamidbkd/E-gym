import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Sport } from 'src/app/components/models/Sport';
import  * as $ from "jquery";
import { Observable } from 'rxjs';

import { NotificationService } from 'src/app/components/services/notification.service';
import { SportService } from 'src/app/components/services/ModlesServices/sport.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AdminComponent } from '../admin.component';
import { Coach } from 'src/app/components/models/Coach';
import { CoachService } from 'src/app/components/services/ModlesServices/coach.service';
import {map, startWith, timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-edit-coach',
  templateUrl: './edit-coach.component.html',
  styleUrls: ['./edit-coach.component.scss']
})
export class EditCoachComponent implements OnInit {
  path: string;
  coachh=new Coach();
  oldimage:string
  private _filterSports(value: string): Sport[] {
    const filterValue = value.toLowerCase();
    return this.sports.filter(state => state.nameSp.toLowerCase().indexOf(filterValue) === 0);
    }
  constructor(private router: Router,
    private sportService:SportService,
     private angf:AngularFireStorage,
     private coachService:CoachService,
    private notification:NotificationService,
     public dialogRef: MatDialogRef<EditCoachComponent>
    , @Inject(MAT_DIALOG_DATA) public coa: Coach ) {
      this.coachh=coa
    this.oldimage=coa.coachimage;
   }

   ngOnInit() {
    this.setvalues()
    this.getAllSports()

  
   } 

   SportCtrl = new FormControl();
  filteredSports:Observable<Sport[]>;
  sports: Sport[];
   getAllSports()
   {
   this.sportService.getAllsports().subscribe(data=>
     {
   this.sports=data,
    this.filteredSports = this.SportCtrl.valueChanges.pipe( 
           startWith(''),
           map(state => state ? this._filterSports(state) : this.sports.slice())
         );
   
     }
     
     
     )
   
   }
     
   upload($event){
    this.path=$event.target.files[0]
  }

  setvalues(){
    $("#firstnam").val( this.coachh.firstname);
    $("#lastnam").val( this.coachh.lastname);
    $("#cinn").val( this.coachh.cin);
    $("#birthdat").val( this.coachh.birthdate);
    $("#adres").val( this.coachh.adress);
    this.sportService.getSportById(this.coachh.sportId).subscribe(data=>$("#sportname").val(data.nameSp))
    

 }

   editCoach(EditCoach:NgForm){

    var  coach2=new Coach();
    if( $("#firstnam").val()=="" || $("#lastnam").val()=="" || $("#cinn").val()=="" || $("#birthdat").val()=="" ||  $("#adres").val()==""||  $("#sportname").val()==""||  $("#psswd").val()==""){
     this.notification.showNotification('top','center','Please fill all the required fields','danger');    
    }
    else{

     this.sportService.getSportByName($("#sportname").val()).subscribe(data=>{
      if(data==null){this.notification.showNotification('top','center','Sport not found','danger'); }
      else{coach2.sportId=data.sportId;


        coach2.coachId=this.coachh.coachId 
        coach2.firstname=$("#firstnam").val();
          coach2.lastname=$("#lastnam").val();
          coach2.cin=$("#cinn").val();
          coach2.birthdate=$("#birthdat").val();
          coach2.adress=$("#adres").val();
          coach2.password=$("#psswd").val();
          coach2.coachcode=this.coachh.coachcode
    
    
         if(this.path==undefined){      
             coach2.coachimage=this.coachh.coachimage;
          this.coachService.updateCoach(coach2).subscribe(
             response=>{
               if(response){       this.notification.showNotification('top','center','Coach Updated successfuly','success');   
                                   this.close();
                                   
                                 }
               if(!response){      this.notification.showNotification('top','center','CIN Already exist','danger');              }
             }
           )
         }
         if(this.path!=undefined){ 
           coach2.coachimage=this.coachh.coachimage;
    
           this.angf.refFromURL(this.oldimage).delete()
    
           this.angf.upload("coach/"+coach2.coachcode ,this.path).then((snapshot) => {
           this.angf.ref("coach/"+coach2.coachcode).getDownloadURL().subscribe(
             data=>{
              coach2.coachimage=data;
             
              this.coachService.updateCoach(coach2).subscribe(
                 response=>{
                   if(response){       this.notification.showNotification('top','center','Coach Updated successfuly','success');   
                                       this.close()
                                        }
                   if(!response){      this.notification.showNotification('top','center','Coach Already exist','danger');              }
                 }
               )
             })
         })
          
         }
          


      }
     })



     
    

    }

   }
     


 close() {
   this.dialogRef.close();
 }

}

