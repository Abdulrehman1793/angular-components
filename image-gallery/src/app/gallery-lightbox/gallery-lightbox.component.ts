import { Component, Input } from '@angular/core';
import { Item, items } from './item';
import {
  trigger,
  transition,
  style,
  animate,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class GalleryLightboxComponent {
  @Input() showCount = false;

  items = items;

  previewImage = false;
  currentIndex = 0;
  showMask = false;
  currentLightboxImage: Item = this.items[this.currentIndex];
  controls = true;

  onPreviewImage(index: number) {
    // shows image
    this.currentIndex = index;
    this.currentLightboxImage = this.items[index];
    this.showMask = true;
    this.previewImage = true;
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex += 1;
    if (this.currentIndex > this.items.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.items[this.currentIndex];
  }

  prev(): void {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.items.length - 1;
    }
    this.currentLightboxImage = this.items[this.currentIndex];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }
}
