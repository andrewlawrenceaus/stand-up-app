import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageStandUpComponent } from "./manage-stand-up.component";

const routes: Routes = [
    { path: '', component: ManageStandUpComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageStandUpRoutingModule{}