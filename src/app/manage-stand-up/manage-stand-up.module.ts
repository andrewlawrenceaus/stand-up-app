import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ManageStandUpRoutingModule } from "./manage-stand-up-routing-module";
import { ManageStandUpComponent } from "./manage-stand-up.component";
import { AddAttendeeComponent } from './add-attendee/add-attendee.component';
import { CurrentAttendeesComponent } from './current-attendees/current-attendees.component';
import { AttendeeItemComponent } from './current-attendees/attendee-item/attendee-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ManageStandUpComponent,
        AddAttendeeComponent,
        CurrentAttendeesComponent,
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