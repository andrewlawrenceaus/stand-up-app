import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandUpService } from 'src/app/shared/stand-up.service';

@Component({
  selector: 'app-stand-up-instance',
  templateUrl: './stand-up-instance.component.html',
  styleUrls: ['./stand-up-instance.component.css']
})
export class StandUpInstanceComponent implements OnInit, OnDestroy {
  @Input() standUpName: string = '';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteAttendee(attendeeName: string) {
    this.standUpService.removeAttendee(attendeeName);
  }

}
