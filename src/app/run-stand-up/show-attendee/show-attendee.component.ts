import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-attendee',
  templateUrl: './show-attendee.component.html',
  styleUrls: ['./show-attendee.component.css']
})
export class ShowAttendeeComponent {
  @Input() name: string = '';
  @Output() nextAttendee = new EventEmitter<undefined>();
  @Output() lateAttendee = new EventEmitter<undefined>();

  constructor() { }

  onNextAttendee(){
    this.nextAttendee.emit();
  }

  onLateAttendee(){
    this.lateAttendee.emit();
  }

}
