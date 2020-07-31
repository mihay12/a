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

  ngOnInit() : void { }

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
