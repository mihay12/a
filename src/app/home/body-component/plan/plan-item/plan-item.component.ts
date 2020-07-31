import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {

  @Input() planName : string;
  @Input() planUpdateDate : string;
  @Input() planImage : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
