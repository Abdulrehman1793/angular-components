import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressTimelineComponent } from './progress-timeline/progress-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressTimelineComponent,
    VerticalTimelineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
