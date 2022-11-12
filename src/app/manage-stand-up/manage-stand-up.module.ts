import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ManageStandUpRoutingModule } from "./manage-stand-up-routing-module";
import { ManageStandUpComponent } from "./manage-stand-up.component";
import { AddAttendeeComponent } from './stand-up-instance/add-attendee/add-attendee.component';
import { StandUpInstanceComponent } from './stand-up-instance/stand-up-instance.component';
import { AttendeeItemComponent } from './stand-up-instance/attendee-item/attendee-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AddStandUpComponent } from './add-stand-up/add-stand-up.component';

@NgModule({
    declarations: [
        ManageStandUpComponent,
        AddAttendeeComponent,
        StandUpInstanceComponent,
        AttendeeItemComponent,
        AddStandUpComponent
    ],
    imports: [
        RouterModule,
        ManageStandUpRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class ManageStandUpModule {}