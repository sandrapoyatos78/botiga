import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRopaPage } from './list-ropa.page';

const routes: Routes = [
  {
    path: '',
    component: ListRopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRopaPageRoutingModule {}
