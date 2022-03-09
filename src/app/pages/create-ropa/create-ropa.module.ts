import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRopaPageRoutingModule } from './create-ropa-routing.module';

import { CreateRopaPage } from './create-ropa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRopaPageRoutingModule, 
    ReactiveFormsModule,
  ],
  declarations: [CreateRopaPage]
})
export class CreateRopaPageModule {}
