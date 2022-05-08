import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcountryComponent } from './allcountry/allcountry.component';
import { DetailCoutryComponent } from './detail-coutry/detail-coutry.component';

const routes: Routes = [
  { path: 'country', component: AllcountryComponent },
  { path: 'detail/:name', component: DetailCoutryComponent },
  { path: '', redirectTo: 'country', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
