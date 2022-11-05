import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandUpService } from '../shared/stand-up.service';

@Component({
  selector: 'app-run-stand-up',
  templateUrl: './run-stand-up.component.html',
  styleUrls: ['./run-stand-up.component.css']
})
export class RunStandUpComponent implements OnInit {
  showStartStandUp: boolean = true;
  showStandUpComplete: boolean = false;
  showAttendee: boolean = false;

  attendees: string[] = [];
  standUpSessionAttendees: string[] = [];
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

  onStartStandUp() {
    this.initialiseStandUpAttendees();
    this.showStartStandUp = false;
    this.showAttendee = true;
  }

  initialiseStandUpAttendees() {
    this.standUpSessionAttendees = [];
    let attendeesToAdd: string[] = [...this.attendees];
    console.log(attendeesToAdd)
    while (attendeesToAdd.length > 0) {
      let randomAttendee = attendeesToAdd
        .splice(Math.floor(Math.random() * attendeesToAdd.length), 1)
      this.standUpSessionAttendees.push(...randomAttendee);
    }
  }

  onNextAttendee(){
    this.standUpSessionAttendees.splice(0,1);
    if (this.standUpSessionAttendees.length === 0){
      this.showAttendee = false;
      this.showStandUpComplete = true;
    }
  }

  onResetStandUp(){
    this.showStandUpComplete = false;
    this.showStartStandUp = true;
  }

}
