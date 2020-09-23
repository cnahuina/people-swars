import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2CompleterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
