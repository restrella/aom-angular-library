import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibAomlibdemoModule } from 'projects/my-lib-aomlibdemo/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyLibAomlibdemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
