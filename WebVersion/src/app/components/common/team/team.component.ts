import { Component, OnInit } from '@angular/core';
import { Coach } from '../../models/Coach';
import { CoachService } from '../../services/ModlesServices/coach.service';
import { SportService } from '../../services/ModlesServices/sport.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  Coachs:Coach[]

  constructor(private coachService:CoachService,private sportService:SportService) { }

  ngOnInit(): void {this.GetCoachs()
  }
  GetCoachs() {
    this.coachService.getAllCoachs().subscribe(
      data=>{this.Coachs=data;
      
        for (let c of this.Coachs) {
          this.sportService.getSportById(c.sportId).subscribe(
            dataa=>c.sportname=dataa.nameSp
          )

        }

      }
    )
  }

}
