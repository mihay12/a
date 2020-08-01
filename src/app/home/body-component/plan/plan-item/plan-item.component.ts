import { Component, OnInit, Input } from '@angular/core';
import { DeleteDataService } from '../service/delete-data.service';
import { CopyDataService } from '../service/copy-data.service';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {

  @Input() planName : string;
  @Input() planUpdateDate : string;
  @Input() planImage : string;
  @Input() planId : string;
  changeItem: boolean;

  constructor(
    private planDelete: DeleteDataService, 
    private planCopy: CopyDataService
    ) { 
    this.changeItem = false;
  }

  ngOnInit(): void {
  }

  async deletePlan(planId: number) {
    return await this.planDelete.deletePlanRequest(planId);
  }

  async copyPlan(planId: number) {
    return await this.planCopy.copyPlanRequest(planId);
  }
}
