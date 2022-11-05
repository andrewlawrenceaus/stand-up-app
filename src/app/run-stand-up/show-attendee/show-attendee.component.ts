import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-attendee',
  templateUrl: './show-attendee.component.html',
  styleUrls: ['./show-attendee.component.css']
})
export class ShowAttendeeComponent implements OnInit {
  @Input() name: string = '';
  @Output() nextAttendee = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  onNextAttendee(){
    this.nextAttendee.emit();
  }

}
