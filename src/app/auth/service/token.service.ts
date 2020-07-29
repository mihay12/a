import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(request, next) {
    const authService = this.injector.get(AuthService);
    const tokenRequest = request.clone({
      setHeaders: {
        Authorization: `JWT ${authService.getToken()}`
      }
    });
    return next.handle(tokenRequest);
  }
}
