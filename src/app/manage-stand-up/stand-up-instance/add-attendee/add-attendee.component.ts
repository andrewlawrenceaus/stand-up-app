import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StandUpService } from 'src/app/shared/stand-up.service';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.css']
})
export class AddAttendeeComponent implements OnInit {
  attendeeForm: FormGroup = new FormGroup('');

  constructor(private standUpService: StandUpService) { }

  ngOnInit(): void {
    this.attendeeForm = new FormGroup({
      'name': new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.standUpService
      .addAttendee(this.attendeeForm.value.name)
    this.attendeeForm.get('name')?.reset();  
  }

}
