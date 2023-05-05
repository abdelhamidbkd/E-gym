import { Component, OnInit } from '@angular/core';
import { Sport } from '../../models/Sport';
import { ScheduleService } from '../../services/ModlesServices/schedule.service';
import {SportService}from '../../services/ModlesServices/sport.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
Sports:Sport[]
sport1=new Sport()
sport2=new Sport()
sport3=new Sport()

  constructor(private sportService:SportService) { 

  }

  ngOnInit(): void {this.GetSports()
  }


  GetSports(){
    this.sportService.getAllsports().subscribe(
      data=>{
        this.Sports=data;
        this.sport1=this.Sports[0];
        this.sport2=this.Sports[1];
        this.sport3=this.Sports[2];
console.log(this.sport1)

      }
    )

  }

}
