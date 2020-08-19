import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  classModal:boolean;
  
  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void { }

  get openModal() { 
    return this.classModal = this.modalService.classModal;
  }

  set closeModal(value) {
    this.modalService.classModal = false;
  }

}
