import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-attendee-item',
  templateUrl: './attendee-item.component.html',
  styleUrls: ['./attendee-item.component.css']
})
export class AttendeeItemComponent implements OnInit {

  @Input() attendee: string = '';
  @Output() deleteAttendee = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAttendee() {
    this.deleteAttendee.emit(this.attendee);
  }

}
