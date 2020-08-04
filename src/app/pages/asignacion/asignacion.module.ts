import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignacionPageRoutingModule } from './asignacion-routing.module';

import { AsignacionPage } from './asignacion.page';

import { BrMaskerModule, BrMaskDirective } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignacionPageRoutingModule,
    BrMaskerModule
  ],
  providers: [
    BrMaskDirective
    
    ],
  declarations: [AsignacionPage]
  
})
export class AsignacionPageModule {}
