import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StandUpService } from 'src/app/shared/stand-up.service';

@Component({
  selector: 'app-add-stand-up',
  templateUrl: './add-stand-up.component.html',
  styleUrls: ['./add-stand-up.component.css']
})
export class AddStandUpComponent implements OnInit {
  standUpForm: FormGroup = new FormGroup('');

  constructor(private standUpService: StandUpService) { }
  
  ngOnInit(): void {
    this.standUpForm = new FormGroup({
      'name': new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.standUpService.addStandUp(this.standUpForm.value.name);
    this.standUpForm.get('name')?.reset();  
  }
}
