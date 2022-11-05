import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stand-up-complete',
  templateUrl: './stand-up-complete.component.html',
  styleUrls: ['./stand-up-complete.component.css']
})
export class StandUpCompleteComponent implements OnInit {
  @Output() resetStandUp = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  onReset(){
    this.resetStandUp.emit();
  }

}
