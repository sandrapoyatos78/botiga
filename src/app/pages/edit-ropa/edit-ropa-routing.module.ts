import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRopaPage } from './edit-ropa.page';

const routes: Routes = [
  {
    path: 'edit-ropa/:id',
    
    component: EditRopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRopaPageRoutingModule {}
