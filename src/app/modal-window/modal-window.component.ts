import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalWindowService } from '/project/angular-task-selo/src/app/modal-window/modal-window.service';

@Component({
  selector: 'modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalWindowComponent implements OnInit, OnDestroy {

    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalWindowService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', el => {
            if (el.target.className === 'modal-window') {
                this.close();
            }
        });
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-window-open');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-window-open');
    }
  }
