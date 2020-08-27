import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  private stanModal = new BehaviorSubject(false);
  currentStanModal = this.stanModal.asObservable();

  constructor() {}

  changeStanModal(stan: boolean) {
    this.stanModal.next(stan);
  }
}