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
    this.subscription = this.standUpService.standUpsChanged
    .subscribe(
      (standUps: Map<string, string[]>) => {
        let standUp = standUps.get(this.standUpName)
        this.attendees = (standUp === undefined) ? [] : standUp;
      }
    )
    let standUp = this.standUpService.getStandUps().get(this.standUpName);
    this.attendees = (standUp === undefined) ? [] : standUp;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addAttendee(attendeeName: string) {
    console.log('add new attendee')
    this.standUpService.addAttendee(attendeeName, this.standUpName);
  }

  deleteAttendee(attendeeName: string) {
    this.standUpService.removeAttendee(attendeeName, this.standUpName);
  }

}
