import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './home/header-component/header-component.component';
import { BodyComponentComponent } from './home/body-component/body-component.component';
import { FooterComponentComponent } from './home/footer-component/footer-component.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TokenService } from './auth/service/token.service';
import { FirstLinkComponent } from './home/body-component/first-link/first-link.component';
import { FilterPipe } from './home/body-component/first-link/pipe/filter.pipe';
import { SortPipe } from './home/body-component/first-link/pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    AuthComponent,
    HomeComponent,
    FirstLinkComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
