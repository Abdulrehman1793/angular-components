import { Component } from '@angular/core';
import { ITEMS } from './data';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss'],
})
export class VerticalTimelineComponent {
  items = ITEMS;
}
