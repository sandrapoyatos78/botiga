import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRopaPageRoutingModule } from './list-ropa-routing.module';

import { ListRopaPage } from './list-ropa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRopaPageRoutingModule
  ],
  declarations: [ListRopaPage]
})
export class ListRopaPageModule {}
