import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRopaOKPageRoutingModule } from './edit-ropa-ok-routing.module';

import { EditRopaOKPage } from './edit-ropa-ok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRopaOKPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [EditRopaOKPage]
})
export class EditRopaOKPageModule {}
