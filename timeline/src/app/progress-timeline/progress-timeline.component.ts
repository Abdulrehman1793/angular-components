import { Component } from '@angular/core';
import { ITEMS } from './data';

@Component({
  selector: 'app-progress-timeline',
  templateUrl: './progress-timeline.component.html',
  styleUrls: ['./progress-timeline.component.scss'],
})
export class ProgressTimelineComponent {
  items = ITEMS;
}
