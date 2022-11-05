import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-stand-up',
  templateUrl: './start-stand-up.component.html',
  styleUrls: ['./start-stand-up.component.css']
})
export class StartStandUpComponent implements OnInit {
  @Output() startStandUp = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.startStandUp.emit();
  }

}
