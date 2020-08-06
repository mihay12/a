import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from '../plan.interface';
declare const $: any;

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})

export class PlanItemComponent implements OnInit {

  @Input() plan : Plan;
  @Output() copy = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  changeItem: boolean;  
  classModal: boolean;

  constructor() { 
    this.changeItem = false;
    this.classModal = false;
  }

  ngOnInit(): void {
  }

  openModal() {
    this.classModal = true;
  }

  closeModal() {
    this.classModal = false;
  }

}
