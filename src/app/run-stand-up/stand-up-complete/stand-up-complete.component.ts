import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stand-up-complete',
  templateUrl: './stand-up-complete.component.html',
  styleUrls: ['./stand-up-complete.component.css']
})
export class StandUpCompleteComponent {
  @Output() resetStandUp = new EventEmitter<undefined>();

  constructor() { }

  onReset(){
    this.resetStandUp.emit();
  }

}
