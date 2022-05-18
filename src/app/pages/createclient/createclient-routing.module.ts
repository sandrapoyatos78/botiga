import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateclientPage } from './createclient.page';

const routes: Routes = [
  {
    path: '',
    component: CreateclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateclientPageRoutingModule {}
