import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  classModal: boolean;
  clic() {
  return console.log(this.classModal);
  }
}