import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { MappingRoutingModule } from './mapping-routing.module';
import { MappingComponent } from './mapping.component'


@NgModule({
  declarations: [MappingComponent],
  imports: [
    CommonModule,
    FormsModule,
    AutocompleteLibModule,
    MappingRoutingModule,
    ReactiveFormsModule
  ]
})
export class MappingModule { }
