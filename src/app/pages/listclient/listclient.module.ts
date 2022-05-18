import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListclientPageRoutingModule } from './listclient-routing.module';

import { ListclientPage } from './listclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListclientPageRoutingModule
  ],
  declarations: [ListclientPage]
})
export class ListclientPageModule {}
