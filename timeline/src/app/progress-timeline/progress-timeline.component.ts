import { Component } from '@angular/core';
import { ITEMS } from './data';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('400ms ease-in', [
          animate('50ms', style({ opacity: 0.25 })),
          animate('10ms', style({ opacity: 0.4 })),
          animate('150ms', style({ opacity: 0.6 })),
          animate('200ms', style({ opacity: 1 })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

@Component({
  selector: 'app-progress-timeline',
  templateUrl: './progress-timeline.component.html',
  styleUrls: ['./progress-timeline.component.scss'],
  animations: [listAnimation],
})
export class ProgressTimelineComponent {
  items = ITEMS;
}
