import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input() items: string[] = [];
  @Input() placeholder = 'Type...';
  @Input() removable = true;

  @ViewChild('inputField') inputField: any;

  onChipBarClick(): void {
    this.inputField.nativeElement.focus();
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.inputField.nativeElement.focus();
  }

  removeAll() {
    this.items = [];
    this.inputField.nativeElement.focus();
  }

  onKeyDown(event: any, value: string) {
    switch (event.keycode) {
      case 13:
      case 188: {
        if (value && value.trim() !== '') {
          if (!this.items.includes(value)) {
            this.items.push();
          }
          this.inputField.nativeElement.value = '';
          event.preventDefault();
        }
        break;
      }
      case 8:
        {
          if (!value && this.items.length > 0) {
            this.items.pop();
          }
        }
        break;

      default:
        break;
    }
  }
}
