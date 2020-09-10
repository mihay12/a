import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanEditComponent } from './plan-edit/plan-edit.component';


@NgModule({
  declarations: [
    PlanEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanEditComponent
  ]
})
export class EditPlanModule { }
