import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerandaPageRoutingModule } from './beranda-routing.module';

import { BerandaPage } from './beranda.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerandaPageRoutingModule
  ],
  declarations: [BerandaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BerandaPageModule {}
