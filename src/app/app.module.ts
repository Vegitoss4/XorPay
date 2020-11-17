import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MappingComponent } from './mapping/mapping.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LeftNavigationComponent } from './shared/components/left-navigation/left-navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    MappingComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
