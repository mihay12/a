import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  plans = [
    'Тест аналитики',
    'ТЕСТ АНАЛИТИКА',
    'test layout plan',
    'Test',
    '254',
    '004',
    '105',
    '302',
    '01',
    '3',
    '23',
    '54',
    '1004',
    '_235',
    '005_Донецька 8а',
    '011_Лятошинського 24а',
    '048_Переяслав-Хмельницький',
    '047_Перемоги,125 літера А',
    '008_Перова 52а',
    '264_Оноре де Бальзака, буд. 22 літ А',
    'Holy shit magazine',
    'Faking slaves-piska228 shop',
    '065_Моторний 9',
    '1961',
    '252_м. Вишгород, вул. Набережна 8-Д корп.3'
  ];

  direction: number;
  isDesc: boolean;
  column: string;

  ngOnInit(): void {
  }

  sort(property) {
    this.isDesc = !this.isDesc; 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
