import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  {path:'services' , component:ServicesComponent} , 
  {path:'aboutUs' , component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , 
    MatSliderModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
