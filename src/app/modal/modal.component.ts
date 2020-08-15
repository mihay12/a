import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  classModal: boolean;

  constructor(private modalService: ModalService) {
    this.classModal = false;
  }

  ngOnInit(): void { }

  openModal() {
    this.classModal = true;
  }

  closeModal() {
    this.classModal = false;
  }

}
