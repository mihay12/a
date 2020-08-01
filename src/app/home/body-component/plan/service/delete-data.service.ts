import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Plan } from '../plan.interface';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http: HttpClient) { }
  
  public deletePlanRequest(id: number): Promise<Plan[]> {
    const url = 'http://app2.test.planohero.com/api/layout/planograms/';  
    return this.http.delete<Plan[]>(`${url}${id}/`).pipe(
      map(response => response)).toPromise();
  }
}
