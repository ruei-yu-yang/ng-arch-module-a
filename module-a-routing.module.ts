import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaC1Component } from "./ma-c1/ma-c1.component";

const routes: Routes = [
  {
    path: '',
    component: MaC1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
