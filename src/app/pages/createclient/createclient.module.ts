import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateclientPageRoutingModule } from './createclient-routing.module';

import { CreateclientPage } from './createclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateclientPageRoutingModule
  ],
  declarations: [CreateclientPage]
})
export class CreateclientPageModule {}
