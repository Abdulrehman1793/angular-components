import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { CustomPdfViewerComponent } from './custom-pdf-viewer/custom-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    CustomPdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
