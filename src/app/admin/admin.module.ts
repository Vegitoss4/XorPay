import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LeftNavigationComponent } from '../shared/components/left-navigation/left-navigation.component'


@NgModule({
  declarations: [AdminComponent, HeaderComponent,LeftNavigationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
