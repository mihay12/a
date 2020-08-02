import { Component, OnInit } from '@angular/core';

import { PlanService } from './service/plan.service';
import { Plan } from './plan.interface';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})

export class PlanComponent implements OnInit {

  plans: Plan[];
  errorMessage: string;
  searchText: string;
  direction: number;
  isDesc: boolean;
  column: string;

  constructor(private shopPlans: PlanService) { } 
  
  async ngOnInit(): Promise<void> {
    this.plans = await this.shopPlans.getPlanRequest();
  }
  
  async deletePlan(planId: number) {
    return await this.shopPlans.deletePlanRequest(planId);
  }

  async copyPlan(planId: number) {
    return await this.shopPlans.copyPlanRequest(planId);
  }

  sort(property) {
    this.isDesc = !this.isDesc; 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}