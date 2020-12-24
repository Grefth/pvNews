import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnunciosModule } from './anuncios/anuncios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
