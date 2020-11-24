import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AuthService } from './services/auth.service';
import { MappingService } from './mapping/mapping.service';
import {HttpClientModule} from '@angular/common/http'





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,AuthService,MappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
