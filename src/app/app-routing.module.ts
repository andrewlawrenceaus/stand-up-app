import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/manage-stand-up', pathMatch: 'full' },
  {
    path: 'manage-stand-up', loadChildren: () => import('./manage-stand-up/manage-stand-up.module')
      .then(m => m.ManageStandUpModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
