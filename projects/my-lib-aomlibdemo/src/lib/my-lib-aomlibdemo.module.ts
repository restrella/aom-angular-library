import { NgModule } from '@angular/core';
import { MyLibAomlibdemoComponent } from './my-lib-aomlibdemo.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MyLibAomlibdemoComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [MyLibAomlibdemoComponent],
})
export class MyLibAomlibdemoModule {}
