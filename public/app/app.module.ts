import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HeaderComponent } from './common/header/header.component';
import { NavBarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}