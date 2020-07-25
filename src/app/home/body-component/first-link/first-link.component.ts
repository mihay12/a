import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service'

@Component({
  selector: 'app-first-link',
  templateUrl: './first-link.component.html',
  styleUrls: ['./first-link.component.css']
})

export class FirstLinkComponent implements OnInit {
  
  plans = this.getData.getPlan().subscribe(data => this.plans = data);
  
  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    
  }

}
