import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PlanComponent } from './home/body-component/plan/plan.component';
import { SecondLinkComponent } from './home/body-component/second-link/second-link.component';
import { ThirdLinkComponent } from './home/body-component/third-link/third-link.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { HomeGuard } from './auth/guard/home.guard';
import { PlanEditComponent } from './home/body-component/plan/plan-edit/plan-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'  
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent, 
    children: [
      {
        path: 'plan',
        component: PlanComponent,
      },
      {
        path: 'second-link',
        component: SecondLinkComponent,
      },
      {
        path: 'third-link',
        component: ThirdLinkComponent,
      },
      {
        path: 'plan-edit/:id',
        loadChildren: "./home/body-component/plan/plan-edit/plan-edit.component#PlanEditComponent"  
      }
    ],
    canActivate: [HomeGuard],
    canLoad: [HomeGuard]
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}