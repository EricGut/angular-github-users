import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';

import {HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ApiComponent,
    LoadingComponent,
    UserComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
