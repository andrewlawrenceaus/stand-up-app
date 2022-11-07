import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-attendee-item',
  templateUrl: './attendee-item.component.html',
  styleUrls: ['./attendee-item.component.css']
})
export class AttendeeItemComponent {

  @Input() attendee: string = '';
  @Output() deleteAttendee = new EventEmitter<string>();

  constructor() { }

  onDeleteAttendee() {
    this.deleteAttendee.emit(this.attendee);
  }

}
