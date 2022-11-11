import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  standUpName: string = '';
  attendees: string[] = [];
  standUpSessionAttendees: string[] = [];

  constructor(private route: ActivatedRoute, private standUpService: StandUpService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          console.log(params['stand-up'])
          let standUpName = params['stand-up'];
          let attendess = this.standUpService.getStandUps().get(standUpName);
          this.standUpName = standUpName.charAt(0).toUpperCase() + standUpName.slice(1).toLowerCase();
          this.attendees = (attendess === undefined) ? [] : attendess;
        }
      )
  }
    
  onStartStandUp() {
    this.initialiseStandUpAttendees();
    this.showStartStandUp = false;
    this.showAttendee = true;
  }

  initialiseStandUpAttendees() {
    this.standUpSessionAttendees = [];
    let attendeesToAdd: string[] = [...this.attendees];
    while (attendeesToAdd.length > 0) {
      let randomAttendee = attendeesToAdd
        .splice(Math.floor(Math.random() * attendeesToAdd.length), 1)
      this.standUpSessionAttendees.push(...randomAttendee);
    }
  }

  onNextAttendee() {
    this.standUpSessionAttendees.splice(0, 1);
    if (this.standUpSessionAttendees.length === 0) {
      this.showAttendee = false;
      this.showStandUpComplete = true;
    }
  }

  onLateAttendee() {
    let lateAttendee = this.standUpSessionAttendees.splice(0, 1);
    this.standUpSessionAttendees.push(...lateAttendee);
  }

  onResetStandUp() {
    this.showStandUpComplete = false;
    this.showStartStandUp = true;
  }

}
