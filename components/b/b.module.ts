import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { B_RoutingModule } from './b.routing';



@NgModule({
  declarations: [
    MainComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    B_RoutingModule
  ]
})
export class B_Module { }
