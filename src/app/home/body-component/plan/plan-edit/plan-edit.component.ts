import { Component, AfterViewInit, Input, ElementRef, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise} from 'rxjs/operators';

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.css']
})
export class PlanEditComponent implements AfterViewInit {


  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width = 1000;
  @Input() public height = 500;
  @Input() public coordinatesUp;
  @Input() public coordinatesDown;
  public ctx: CanvasRenderingContext2D; 

  constructor() { }

  ngAfterViewInit(): void {
    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasElement.getContext('2d');

    canvasElement.width = this.width;
    canvasElement.height = this.height;

    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#000';

    this.captureEvents(canvasElement);
  }

  private captureEvents(canvasElement: HTMLCanvasElement) {
    fromEvent(canvasElement, 'mousedown')
      .pipe(
        switchMap(e => {
          return fromEvent( canvasElement, 'mousemove')
            .pipe(
              takeUntil(fromEvent(canvasElement, 'mouseup')),
              takeUntil(fromEvent(canvasElement, 'mouseleave')),
              pairwise()
            )
        })
      )
      .subscribe((result: [MouseEvent, MouseEvent]) => {
        const rect = canvasElement.getBoundingClientRect();

         this.coordinatesDown = {
          x: result[0].clientX - rect.left,
          y: result[0].clientY - rect.top
        };

        this.coordinatesUp;
        this.drawOnCanvas();
      });
  
      fromEvent(canvasElement, 'mouseup').subscribe((result: MouseEvent) => {
        const rect = canvasElement.getBoundingClientRect();

        this.coordinatesUp = {
          x: result.clientX - rect.left,
          y: result.clientY - rect.top
        };
        this.drawOnCanvas();
      });
      
    }

  private drawOnCanvas() {

    if (!this.ctx) return;
    
    this.ctx.beginPath();
    if (this.coordinatesDown) {
      this.ctx.moveTo(this.coordinatesDown.x, this.coordinatesDown.y);
      this.ctx.lineTo(this.coordinatesUp.x, this.coordinatesUp.y)
      this.ctx.stroke();
    }
  }

  
  clear() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');
    this.ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
  
}