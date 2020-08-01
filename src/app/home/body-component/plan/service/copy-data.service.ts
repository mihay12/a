import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Plan } from '../plan.interface';

@Injectable({
  providedIn: 'root'
})
export class CopyDataService {

  constructor(private http: HttpClient) { }
  
  public copyPlanRequest(id: number): Promise<Plan[]> {
    const url = 'http://app2.test.planohero.com/api/layout/planograms/';  
    return this.http.get<Plan[]>(`${url}${id}/clone/`).pipe(
      map(response => response)).toPromise();
  }
}
