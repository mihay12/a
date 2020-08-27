import { Component, OnInit} from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  stan: boolean;
  
  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void { 
    this.modalService.currentStanModal.subscribe(stan => this.stan = stan);
  }
  closeModal() {
    this.modalService.changeStanModal(false);
  }
}