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
import { Room } from 'src/app/components/models/Room';
import { RoomService } from 'src/app/components/services/ModlesServices/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
room= new Room()
  constructor(  private router: Router,  private angf:AngularFireStorage,
    private roomService:RoomService,
    private notification:NotificationService,private coachService:CoachService,private subService:SubscriptionService,private sportService:SportService) { }
  ngOnInit(): void {
  }

  registerRoom(addRoom:NgForm){
this.room=addRoom.value;
if(addRoom.invalid){      this.notification.showNotification('top','center','Please fill all the required fields','danger');    }
else{
  this.roomService.addRoom(this.room).subscribe(
    response=>{
      if(response){ this.notification.showNotification('top','center','Room has been successfully added','success');         
      window.location.reload();}
      if(!response){
        this.notification.showNotification('top','center','Room already exist!!!','danger'); 
      }
    }
  )

}

  }
}
