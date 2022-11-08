import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.css']
})
export class AddAttendeeComponent implements OnInit {
  attendeeForm: FormGroup = new FormGroup('');
  @Output() newAttendee = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.attendeeForm = new FormGroup({
      'name': new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.newAttendee.emit(this.attendeeForm.value.name);
    this.attendeeForm.get('name')?.reset();  
  }

}
