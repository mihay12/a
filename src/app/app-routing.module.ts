import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FirstLinkComponent } from './home/body-component/first-link/first-link.component';
import { SecondLinkComponent } from './home/body-component/second-link/second-link.component';
import { ThirdLinkComponent } from './home/body-component/third-link/third-link.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CanActivateRouteGuard }   from './auth/can-activate-route.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'  
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent, children: [
      {
        path: 'first-link',
        component: FirstLinkComponent,
        canActivate: [CanActivateRouteGuard]
      },
      {
        path: 'second-link',
        component: SecondLinkComponent,
        canActivate: [CanActivateRouteGuard]
      },
      {
        path: 'third-link',
        component: ThirdLinkComponent,
        canActivate: [CanActivateRouteGuard]
      },
    ],
    canActivate: [CanActivateRouteGuard]
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}