import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationcomptePageRoutingModule } from './creationcompte-routing.module';

import { CreationcomptePage } from './creationcompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationcomptePageRoutingModule
  ],
  declarations: [CreationcomptePage]
})
export class CreationcomptePageModule {}
