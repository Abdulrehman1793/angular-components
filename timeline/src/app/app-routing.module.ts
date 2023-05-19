import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressTimelineComponent } from './progress-timeline/progress-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

const routes: Routes = [
  { path: '', redirectTo: 'progress', pathMatch: 'full' },
  {
    path: 'progress',
    title: 'Progress Timeline',
    component: ProgressTimelineComponent,
  },
  {
    path: 'vertical',
    title: 'Vertical Timeline',
    component: VerticalTimelineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
