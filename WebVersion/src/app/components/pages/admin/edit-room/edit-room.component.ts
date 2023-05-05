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
import { Room } from 'src/app/components/models/Room';
import { RoomService } from 'src/app/components/services/ModlesServices/room.service';
@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent  implements OnInit{
  roomm=new Room();

  constructor(private router: Router,
    private sportService:SportService,
    private roomService:RoomService,
     private angf:AngularFireStorage,
    private notification:NotificationService,
    public dialogRef: MatDialogRef<EditRoomComponent>
   , @Inject(MAT_DIALOG_DATA) public roo: Room ) {
    this.roomm=roo

  }


  ngOnInit() {
    this.setvalues()

  
   } 
   
   setvalues(){
    $("#roomNu").val( this.roomm.roomNum);
     $("#roomNam").val( this.roomm.roomName);
 }
  
     
 editRoom(EditRoomComponent:NgForm){
  var  room2=new Room();
  if( $("#roomNu").val()=="" ||  $("#roomNam").val()==""){
    this.notification.showNotification('top','center','Please fill all the required fields','danger');    
   }
   else{

    room2.roomId=this.roomm.roomId 
    room2.roomNum=$("#roomNu").val();
    room2.roomName=$("#roomNam").val();
    this.roomService.updateRoom(room2).subscribe(
      response=>{
        if(response){ this.notification.showNotification('top','center','Room Updated successfuly','success');   
        this.close(); }
        if(!response){      this.notification.showNotification('top','center','Room Already exist','danger');              }
       
      }

    )

   }


 }

 close() {
   this.dialogRef.close();
 }

}

