import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})

export class FilterPipe implements PipeTransform {

  transform(plans: any[], searchText: string): any[] {
    if (!plans) return [];
    if (!searchText) return plans;
    searchText = searchText.toLowerCase();
    return plans.filter((plan) => {
      return plan.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}