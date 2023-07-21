import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AboutComponent } from './mycomponent/about/about.component';


const routes:Routes=[
  { path: '', component :TodosComponent},
  { path: 'about', component: AboutComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
