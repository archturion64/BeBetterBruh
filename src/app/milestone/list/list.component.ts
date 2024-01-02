import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MilestoneStore } from '../data/milestone.store';

@Component({
  selector: 'milestone-list',
  host: {
    class:'container'
  },
  template: `
    <div>
      @if (store.loading()) {
        <common-loading-indicator></common-loading-indicator>
      } @else if (store.error()) {
        <div>{{store.error()}}</div>
      } @else {
        <div class="flex flex-wrap">
          @for (milestone of store.milestones(); track milestone.id) {
            <div class="card w-96 bg-base-100 shadow-xl m-9">
              <div class="card-body">
                <h2 class="card-title">{{milestone.name}}</h2>
                <p>{{milestone.description}}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Start Learning</button>
                </div>
              </div>
            </div>
          } @empty {
            <h1 class="text-xl italic m-5">List is empty.</h1>
          }
        </div>
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
