import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RunStandUpComponent } from "./run-stand-up.component";

const routes: Routes = [
    { path: '', component: RunStandUpComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RunStandUpRoutingModule{}