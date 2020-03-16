import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondPageComponent} from './second-page/second-page.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'secondPage', component: SecondPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
