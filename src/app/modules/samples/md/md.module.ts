import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdPageRoutingModule } from './md-routing.module';

import { MdPage } from './pages/md.page';
import { SwirlSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdPageRoutingModule,
    SwirlSharedModule
  ],
  declarations: [MdPage]
})
export class MdPageModule {}
