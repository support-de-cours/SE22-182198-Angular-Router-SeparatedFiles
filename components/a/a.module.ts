import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { A_RoutingModule } from './a.routing';


@NgModule({
  declarations: [
    MainComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    A_RoutingModule
  ]
})
export class A_Module { }
