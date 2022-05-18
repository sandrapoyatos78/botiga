import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRopaOKPage } from './edit-ropa-ok.page';

const routes: Routes = [
  {
    path: '',
    component: EditRopaOKPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRopaOKPageRoutingModule {}
