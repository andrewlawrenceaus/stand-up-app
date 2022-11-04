import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandUpService } from '../shared/stand-up.service';

@Component({
  selector: 'app-run-stand-up',
  templateUrl: './run-stand-up.component.html',
  styleUrls: ['./run-stand-up.component.css']
})
export class RunStandUpComponent implements OnInit {

  attendees: string[] = [];
  subscription: Subscription = new Subscription;
  
  constructor(private standUpService: StandUpService) { }

  ngOnInit(): void {
    this.subscription = this.standUpService.attendeesChanged
    .subscribe(
      (attendees: string[]) => {
        this.attendees = attendees;
      }
    )
    this.attendees = this.standUpService.getAttendees();
  }
}
