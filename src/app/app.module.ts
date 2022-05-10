import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BoardModule} from "./board/board.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
