import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './pages/home.page';

import { HomeRoutingModule } from './home-routing.module';
import { SwirlSharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
    SwirlSharedModule
  ],
  declarations: [HomePage]
})
export class HomeModule {}
