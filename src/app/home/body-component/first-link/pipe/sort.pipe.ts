import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})

export class SortPipe implements PipeTransform {
  
  transform(plans: Array<any>, args?: any): any {
    return plans.sort(function (a, b) {
      if (a[args.property] < b[args.property]) return -1 * args.direction;
      else if (a[args.property] > b[args.property]) return 1 * args.direction;
      return 0;
    });
  }
}