import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandUpService } from 'src/app/shared/stand-up.service';

@Component({
  selector: 'app-current-attendees',
  templateUrl: './current-attendees.component.html',
  styleUrls: ['./current-attendees.component.css']
})
export class CurrentAttendeesComponent implements OnInit {

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

  deleteAttendee(attendeeName: string) {
    this.standUpService.removeAttendee(attendeeName);
  }

}
