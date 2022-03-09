import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRopaPage } from './create-ropa.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRopaPageRoutingModule {}
