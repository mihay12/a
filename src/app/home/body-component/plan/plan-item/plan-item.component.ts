import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Plan } from '../plan.interface';
import { ModalService } from 'src/app/modal/service/modal.service';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})

export class PlanItemComponent implements OnInit {

  @Input() plan: Plan;
  @Output() copy = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  changeItem: boolean;  
  value:boolean;

  constructor(private modalService: ModalService) { 
    this.changeItem = false;
    this.value = true;
  }

  ngOnInit(): void {
  }

  copyEmit(planId) {
    this.copy.emit(planId);
  }

  deleteEmit(planId) {
   this.delete.emit(planId);
  }

  get closeModal() {
    return this.modalService.classModal;  
  }

  updateEmit(planId) {
    this.update.emit(planId);
  }
  set openModal(value) {
    this.modalService.classModal = value;
  }
}
