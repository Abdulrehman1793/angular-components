import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { CustomPdfViewerComponent } from './custom-pdf-viewer/custom-pdf-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'pdf-viewer', pathMatch: 'full' },
  { path: 'pdf-viewer', component: PdfViewerComponent },
  { path: 'custom-pdf-viewer', component: CustomPdfViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
