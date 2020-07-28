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
  filteredPlans: Plan[];
  private searchString: string;
  errorMessage: string;
  
  
  ngOnInit(): void {
    this.getData.getPlan().subscribe(
      (data: Plan[]) => this.plans = data,
      error => this.errorMessage = <any>error,
      () => this.filteredPlans = this.plans
      );
  }

  constructor(private getData: GetDataService) { } 

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

  sortType(sort: string) {
    if(sort === 'name') {
      this.plans = this.plans.sort(this.sortByName);
      console.log(this.plans);
    }
    if(sort === 'date') {
      this.plans = this.plans.sort(this.sortByDate);
      console.log(this.plans);
    }
  }

  sortByName(a: Plan, b: Plan) { 
      return ('' + b.name).localeCompare(a.name);
  }
    


   sortByDate(a: Plan, b: Plan){
    if (a.update_date < b.update_date) return -1;
      else if(a.update_date > b.update_date) return  1;
        else return  0;
  }
}