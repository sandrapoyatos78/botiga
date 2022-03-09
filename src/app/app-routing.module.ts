import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    path: 'edit-ropa',
    loadChildren: () => import('./pages/edit-ropa/edit-ropa.module').then( m => m.EditRopaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
