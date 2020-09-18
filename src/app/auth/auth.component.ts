import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from './service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  
  credentials = {
    username: "",
    password: ""
  };
  done: boolean = false;
  
  constructor(
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    const plans = [
      'Тест аналитики',
      'Шах і мат аметисти',
      'test layout plan',
      'Test',
      '254',
      '004',
      'Фасулинє',
      'Dangeon Master',
      'Boss a Gym',
      'anal',
      'baran',
      'van Darkhoolm',
      'огірки з маслом',
      'анаша',
      'ганджюбас',
      'поташ',
      'Аурма',
      '105',
      '302',
      '01',
      '3',
      '23',
      '54',
      '1004',
      '235',
      '005_Донецька 8а',
      '011_Лятошинського 24а',
      '048_Переяслав-Хмельницький',
      '047_Перемоги,125 літера А',
      '008_Перова 52а',
      '264_Оноре де Бальзака, буд. 22 літ А',
      '252_м. Вишгород, вул. Набережна 8-Д корп.3'
    ];

    const sortedPlans = plans.sort(function (a: any, b: any) {
      const isDigit = /(^\d+)(\w)(\W)/gi;
      const aLoweCase = a.toLowerCase();
      const bLoweCase = b.toLowerCase();
      const firstSymbolA = aLoweCase.match(isDigit);
      const firstSymbolB = bLoweCase.match(isDigit);

      if (!isNaN(firstSymbolA) && !isNaN(firstSymbolB)) {
        return aLoweCase - bLoweCase;
      }
      else {
          if (aLoweCase < bLoweCase) return -1;
          else if (aLoweCase > bLoweCase) return 1;
          return 0;
      }
    })


    console.log(sortedPlans)
   }

  handler() { 
    this.authService.loginUser(this.credentials)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token),
          this.router.navigate(['/home/plan'])
        },
        err => console.log(err)
      ); 
  }
}
