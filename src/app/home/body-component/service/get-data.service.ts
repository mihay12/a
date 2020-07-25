import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  
  url = 'http://app2.test.planohero.com/api/layout/planograms/';

  getPlan() {
    return this.http.get(this.url);
  }
}
