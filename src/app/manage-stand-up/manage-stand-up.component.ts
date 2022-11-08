import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandUpService } from '../shared/stand-up.service';

@Component({
  selector: 'app-manage-stand-up',
  templateUrl: './manage-stand-up.component.html',
  styleUrls: ['./manage-stand-up.component.css']
})
export class ManageStandUpComponent implements OnInit, OnDestroy {
  standUps: Map<string, string[]> = new Map;
  subscription: Subscription = new Subscription;

  constructor(private standUpService: StandUpService) { }

  ngOnInit(): void {
    this.subscription = this.standUpService.standUpsChanged
      .subscribe(
        (standUps: Map<string, string[]>) => {
          this.standUps = standUps;
        }
      )
    this.standUps = this.standUpService.getStandUps();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
