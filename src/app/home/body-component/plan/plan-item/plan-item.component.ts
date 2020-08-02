import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from '../plan.interface';
import { ModalWindowService } from '/project/angular-task-selo/src/app/modal-window/modal-window.service';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})

export class PlanItemComponent implements OnInit {

  @Input() plan : Plan;
  @Output() copy = new EventEmitter();
  @Output() delete = new EventEmitter();

  changeItem: boolean;  

  constructor(public modalService: ModalWindowService ) { 
    this.changeItem = false;
  }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
