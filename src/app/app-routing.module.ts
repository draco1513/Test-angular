import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

const routes: Routes = [
  {
    path:'',
    component:MainPagesComponent
  },
  {
    path:'**',
  redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
