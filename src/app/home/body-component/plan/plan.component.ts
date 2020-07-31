import { Component, OnInit } from '@angular/core';

import { GetDataService } from './service/get-data.service';
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

  constructor(private shopPlans: GetDataService) { } 
  
  async ngOnInit(): Promise<void> {
    this.plans = await this.shopPlans.getPlan();
  }

  sort(property) {
    this.isDesc = !this.isDesc; 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}