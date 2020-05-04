import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardTokenGuard } from './guard/guard-token.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [GuardTokenGuard]
  },
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
