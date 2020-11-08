import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Plan } from '../interface/plan.interface';
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
  stan: boolean;

  constructor(private modalService: ModalService) { 
    this.changeItem = false;
  }

  ngOnInit(): void {
    this.modalService.currentStanModal.subscribe(stan => this.stan = stan);
  }

  copyEmit(planId) {
    this.copy.emit(planId);
  }

  deleteEmit(planId) {
   this.delete.emit(planId);
  }

  closeModal() {
    this.modalService.changeStanModal(false);
  }

  updateEmit(planId) {
    this.modalService.changeStanModal(false);
    this.update.emit(planId);
  }
  
  openModal() {
    this.modalService.changeStanModal(true);
  }
}
