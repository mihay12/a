import { Component, OnInit } from '@angular/core';

import { GetDataService } from './service/get-data.service';
import { Plan } from './plan.interface';

@Component({
  selector: 'app-first-link',
  templateUrl: './first-link.component.html',
  styleUrls: ['./first-link.component.css']
})

export class FirstLinkComponent implements OnInit {

  plans: Plan[];
  errorMessage: string;
  
  ngOnInit(): void {
    this.getData.getPlan().subscribe(
      (data: Plan[]) => this.plans = data,
      error => this.errorMessage = <any>error,
      () => this.filteredPlans = this.plans
      );
  }

  constructor(private getData: GetDataService) { } 

  //фільтраія по назві

  filteredPlans: Plan[];
  private searchString: string;

  get searchTerm(): string {
    return this.searchString;
  }

  set searchTerm(value: string) {
    this.searchString = value;
    this.filteredPlans = this.filterPlans(value);
  }

  filterPlans(searchString: string) {
    return this.plans.filter(plan =>  
      plan.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  //сортування по даті та назві

  isDesc: boolean;
  column: string;
  
  sort(property){
    this.isDesc = !this.isDesc; 
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.filteredPlans.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};
}