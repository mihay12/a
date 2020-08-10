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
    await this.shopPlans.deletePlanRequest(planId);
    return this.plans = this.plans.filter(plan => plan.id !== planId);
  }

  async copyPlan(planId: number) {
    return this.plans.unshift(await this.shopPlans.copyPlanRequest(planId));
  }

  async updatePlan(planId: number, planValue: Plan){
    return await this.shopPlans.updatePlanRequest(planId, planValue);
  }

  sort(property) {
    this.isDesc = !this.isDesc; 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}