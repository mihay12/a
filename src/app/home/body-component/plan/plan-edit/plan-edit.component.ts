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
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasElement.getBoundingClientRect();

        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        this.drawOnCanvas(prevPos, currentPos, canvasElement);
      });
  } 

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number },
    canvasElement
  ) {

    if (!this.ctx) return;

    this.ctx.beginPath();

    if (prevPos) {
      this.ctx.moveTo(prevPos.x, prevPos.y);
      this.ctx.lineTo(currentPos.x, currentPos.y)
      this.ctx.stroke();
    }
    // if (canvasElement.ctrlKey) {
    //   this.ctx.moveTo(prevPos.x, prevPos.y);
    //   const dx = canvasElement.offsetX - prevPos.x;
    //   const dy = canvasElement.offsetY - prevPos.y;
    //   if (dx > dy) {
    //     this.ctx.lineTo(canvasElement.offsetX, prevPos.y);
    //     this.ctx.stroke();
    //   } else {
    //     this.ctx.lineTo(prevPos.x, canvasElement.offsetY);
    //     this.ctx.stroke();
    //   }
    // }
  }
}