import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RunStandUpComponent } from "./run-stand-up.component";
import { RunStandUpRoutingModule } from "./run-stand-up-routing-module";
import { ShowAttendeeComponent } from "./show-attendee/show-attendee.component";
import { StartStandUpComponent } from "./start-stand-up/start-stand-up.component";
import { StandUpCompleteComponent } from "./stand-up-complete/stand-up-complete.component";

@NgModule({
    declarations: [
        RunStandUpComponent,
        ShowAttendeeComponent,
        StartStandUpComponent,
        StandUpCompleteComponent
    ],
    imports: [
        RouterModule,
        RunStandUpRoutingModule,
        CommonModule
    ]
})
export class RunStandUpModule {}