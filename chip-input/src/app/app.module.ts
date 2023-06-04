import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipsModule } from './chips/chips.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChipsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
