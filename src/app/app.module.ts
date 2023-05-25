import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponentsComponent } from './components/card.components/card.components.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
    CardComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
