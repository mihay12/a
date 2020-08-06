import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Plan } from '../plan.interface';

@Injectable({
  providedIn: 'root'
})

export class PlanService {

  url = 'http://app3.test.planohero.com/api/layout/planograms/'

  constructor(private http: HttpClient) { }
  
  public getPlanRequest(): Promise<Plan[]> {
    return this.http.get<Plan[]>(this.url).pipe(
      map(response => response)).toPromise();
  }

  public deletePlanRequest(id: number): Promise<Plan[]> {  
    return this.http.delete<Plan[]>(`${this.url}${id}/`).pipe(
      map(response => response)).toPromise();
  }

  public copyPlanRequest(id: number): Promise<Plan[]> { 
    return this.http.get<Plan[]>(`${this.url}${id}/clone/`).pipe(
      map(response => response)).toPromise();
  }

  public updatePlanRequest(id: number, planValue: Plan[]): Promise<Plan[]> { 
    return this.http.put<Plan[]>(`${this.url}${id}/`, planValue).pipe(
      map(response => response)).toPromise();
  }
}
