import { Component, AfterViewInit, Input, ElementRef, ViewChild, HostListener} from '@angular/core';
import Konva from 'konva';
import { fromEvent } from 'rxjs';
import { Instrument } from '../interface/instrument.interface';
import { PlanService } from '../service/plan.service';

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.css']
})
export class PlanEditComponent implements AfterViewInit {

  // @ViewChild('canvas') public canvas: ElementRef;

  // width:number = 1000;
  // height:number = 500;
  // coordinatesUp;
  // coordinatesDown;
  // ctx: CanvasRenderingContext2D; 
  open: boolean = false;
  instruments: Instrument[];
  displayInstruments = [];
  page: number = 1;

  openPanel() {
    return this.open = !this.open;
  }
  
  constructor(private standInstrument: PlanService) { }

  async ngOnInit(): Promise<void> {
    this.instruments = await this.standInstrument.getInstumentRequest();
    this.displayInstruments = [...this.instruments.slice(0, this.page * 20)];
  }

  ngAfterViewInit(): void {
    const stage = new Konva.Stage({
      container: 'canvas-container',
      width: 500,
      height: 500
    });
    
    const layer = new Konva.Layer();
      stage.add(layer);

      let isPaint = false;
      let lastLine;

      stage.on('mousedown', e => {
        isPaint = true;
        let pos = stage.getPointerPosition(),
        rect = stage.getClientRect();
        lastLine = new Konva.Line({
          stroke: 'black',
          strokeWidth: 5,
          points: [pos.x, pos.y],
        });
        layer.add(lastLine);
      });

      stage.on('mouseup', () => {
        isPaint = false;
      });

      stage.on('mousemove', () => {
        if (!isPaint) {
          return;
        }

        const pos = stage.getPointerPosition();
        let newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
      });
    
    // const circle = new Konva.Circle({
    //   x: stage.width() / 2,
    //   y: stage.height() / 2,
    //   radius: 70,
    //   fill: 'red',
    //   stroke: 'black',
    //   strokeWidth: 4
    // })
    
    // layer.add(circle);



    // layer.draw;
  }

  //   const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
  //   this.ctx = canvasElement.getContext('2d');

  //   canvasElement.width = this.width;
  //   canvasElement.height = this.height;

  //   this.ctx.lineWidth = 3;
  //   this.ctx.lineCap = 'round';
  //   this.ctx.strokeStyle = '#000';

  //   this.captureEvents(canvasElement);
  // }

  // private captureEvents(canvasElement: HTMLCanvasElement) {
  //   fromEvent(canvasElement, 'mousedown')
  //     .subscribe((result: MouseEvent) => {
  //       const rect = canvasElement.getBoundingClientRect();
  //       this.coordinatesDown = {
  //         x: result.clientX - rect.left,
  //         y: result.clientY - rect.top
  //       };
  //   });

  //   fromEvent(canvasElement, 'mousemove').subscribe(() => {
  //       this.drawOnCanvas();
  //   });

  //   fromEvent(canvasElement, 'mouseup').subscribe((result: MouseEvent) => {
  //     const rect = canvasElement.getBoundingClientRect();
  //       this.coordinatesUp = {
  //         x: result.clientX - rect.left,
  //         y: result.clientY - rect.top
  //       };
  //       this.drawOnCanvas();
  //   });
  //  }

  // private drawOnCanvas() {
  //   if (!this.ctx) return;

  //   this.ctx.beginPath();
  //   if (this.coordinatesDown) {
  //     this.ctx.moveTo(this.coordinatesDown.x, this.coordinatesDown.y);
  //     this.ctx.lineTo(this.coordinatesUp.x, this.coordinatesUp.y)
  //     this.ctx.stroke();
  //   }
  //   this.ctx.closePath();
  // }

  // clear() {
  //   const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
  //   this.ctx = canvasEl.getContext('2d');
  //   this.ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  // }

    @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.displayInstruments = [...this.instruments.slice(0, this.page * 20)];
      this.page++;
    }
  }
}