import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Plan } from '../plan.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  
  url = 'http://app2.test.planohero.com/api/layout/planograms/';

  public getPlan(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.url);
  }
}
