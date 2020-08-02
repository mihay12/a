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
import { PlanComponent } from './home/body-component/plan/plan.component';
import { FilterPipe } from './home/body-component/plan/pipe/filter.pipe';
import { SortPipe } from './home/body-component/plan/pipe/sort.pipe';
import { PlanItemComponent } from './home/body-component/plan/plan-item/plan-item.component';
import { ModalWindowModule } from './modal-window/modal-window.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    AuthComponent,
    HomeComponent,
    PlanComponent,
    FilterPipe,
    SortPipe,
    PlanItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalWindowModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
