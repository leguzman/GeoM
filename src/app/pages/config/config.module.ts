import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigPageRoutingModule } from './config-routing.module';

import { ConfigPage } from './config.page';
import { BrMaskerModule, BrMaskDirective } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfigPageRoutingModule,
    MaterialModule,
    BrMaskerModule
  ],
  providers: [
    BrMaskDirective   
    ],
  declarations: [ConfigPage]
})
export class ConfigPageModule {}
