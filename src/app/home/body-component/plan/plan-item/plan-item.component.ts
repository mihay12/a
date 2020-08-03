import { Component, OnInit, Input, Output, ViewChild, EventEmitter} from '@angular/core';
import { Plan } from '../plan.interface';
import { ModalComponent } from '/home/mykhailo/projects/taskAngular/node_modules/angular-custom-modal';
@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})

export class PlanItemComponent implements OnInit {

  // @Input() plan: Plan;
  // @Output() handler = new EventEmitter();
  @Input() plan: Plan;
  @Output() copy = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  changeItem: boolean;  

  constructor() { 
    this.changeItem = false;
  }

  ngOnInit(): void {
  }

}