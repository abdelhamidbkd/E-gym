import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Room } from 'src/app/components/models/Room';
import { Schedule } from 'src/app/components/models/Schedule';
import { CoachService } from 'src/app/components/services/ModlesServices/coach.service';
import { RoomService } from 'src/app/components/services/ModlesServices/room.service';
import { ScheduleService } from 'src/app/components/services/ModlesServices/schedule.service';
import { SportService } from 'src/app/components/services/ModlesServices/sport.service';
import { NotificationService } from 'src/app/components/services/notification.service';
import { EditRoomComponent } from '../../admin/edit-room/edit-room.component';

@Component({
  selector: 'app-all-dates',
  templateUrl: './all-dates.component.html',
  styleUrls: ['./all-dates.component.scss']
})
export class AllDatesComponent implements OnInit {
allSession:Schedule[]
  constructor(private router: Router,
    private sportService:SportService,
    private roomService:RoomService,
    private schedService:ScheduleService,
    private coachService:CoachService,
     private angf:AngularFireStorage,
    private notification:NotificationService,
    public dialogRef: MatDialogRef<EditRoomComponent>
   , @Inject(MAT_DIALOG_DATA) public day) {
  

  }
  ngOnInit(): void {
    this.setvalues(this.day)

  }

  setvalues(day) {
this.schedService.getAllSchedulesByDay(day).subscribe(
  data=>{this.allSession=data;
    for (let se of this.allSession) {
      this.roomService.getRoomById(se.roomId).subscribe(data=>se.roomNum=data.roomNum)
      this.coachService.getCoachById(se.coachId).subscribe(data=>se.coachname=data.firstname+" "+data.lastname)
      this.sportService.getSportById(se.sportId).subscribe(data=>se.sportname=data.nameSp)

    }


  }

)
  }

}
