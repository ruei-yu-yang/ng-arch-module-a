import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaC1Component } from './ma-c1/ma-c1.component';
import { ModuleARoutingModule } from './module-a-routing.module';



@NgModule({
  declarations: [
    MaC1Component
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
