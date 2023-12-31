import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MilestoneStore } from '../data/milestone.store';

@Component({
  selector: 'milestone-list',
  host: {
    class:'w-full'
  },
  template: `
    <div>
      @if (store.loading()) {
        <common-loading-indicator></common-loading-indicator>
      } @else if (store.error()) {
        <div>{{store.error()}}</div>
      } 
    </div>
    <div>
      @for (milestone of store.milestones(); track milestone.id) {
        {{ milestone.name }}
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MilestoneStore]
})
export class ListComponent {

  store = inject(MilestoneStore);

}
