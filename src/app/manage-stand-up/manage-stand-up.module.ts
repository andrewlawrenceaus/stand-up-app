import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ManageStandUpRoutingModule } from "./manage-stand-up-routing-module";
import { ManageStandUpComponent } from "./manage-stand-up.component";
import { AddAttendeeComponent } from './stand-up-instance/add-attendee/add-attendee.component';
import { StandUpInstanceComponent } from './stand-up-instance/stand-up-instance.component';
import { AttendeeItemComponent } from './stand-up-instance/attendee-item/attendee-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ManageStandUpComponent,
        AddAttendeeComponent,
        StandUpInstanceComponent,
        AttendeeItemComponent
    ],
    imports: [
        RouterModule,
        ManageStandUpRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class ManageStandUpModule {}