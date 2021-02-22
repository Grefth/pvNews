import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnunciosModule } from './anuncios/anuncios.module';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecursosComponent } from './recursos/recursos.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
