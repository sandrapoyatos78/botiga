import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'create-ropa',
    loadChildren: () => import('./pages/create-ropa/create-ropa.module').then( m => m.CreateRopaPageModule)
  },
  {
    path: 'list-ropa',
    loadChildren: () => import('./pages/list-ropa/list-ropa.module').then( m => m.ListRopaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'edit-ropa-ok/:id',
    loadChildren: () => import('./pages/edit-ropa-ok/edit-ropa-ok.module').then( m => m.EditRopaOKPageModule)
  },
  {
    path: 'listclient',
    loadChildren: () => import('./pages/listclient/listclient.module').then( m => m.ListclientPageModule)
  },
  {
    path: 'createclient',
    loadChildren: () => import('./pages/createclient/createclient.module').then( m => m.CreateclientPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
