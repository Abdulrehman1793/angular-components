import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent {
  selectedFile: any;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Perform any necessary operations with the file
    this.selectedFile = file;
  }
}
