import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListclientPage } from './listclient.page';

const routes: Routes = [
  {
    path: '',
    component: ListclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListclientPageRoutingModule {}
