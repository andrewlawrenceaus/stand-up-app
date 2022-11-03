import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ManageStandUpRoutingModule } from "./manage-stand-up-routing-module";
import { ManageStandUpComponent } from "./manage-stand-up.component";

@NgModule({
    declarations: [
        ManageStandUpComponent
    ],
    imports: [
        RouterModule,
        ManageStandUpRoutingModule
    ]
})
export class ManageStandUpModule {}