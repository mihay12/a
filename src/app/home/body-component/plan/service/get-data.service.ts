import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Plan } from '../plan.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  
  public getPlan(): Promise<Plan[]> {
    const url = 'http://app2.test.planohero.com/api/layout/planograms/';  
    return this.http.get<Plan[]>(url).pipe(
      map(response => response)).toPromise();
  }
}
