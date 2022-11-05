import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-stand-up',
  templateUrl: './start-stand-up.component.html',
  styleUrls: ['./start-stand-up.component.css']
})
export class StartStandUpComponent {
  @Output() startStandUp = new EventEmitter<string>();

  constructor() { }

  onStart(){
    this.startStandUp.emit();
  }

}
