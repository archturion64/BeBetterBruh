import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProgressStore } from '../data/progress.store';
import { MilestoneProgress } from '../../api.model';

@Component({
  selector: 'progress-list',
  host: {
    class:'container'
  },
  template: `
    <div>
      @if (store.loading()) {
        <common-loading-indicator/>
      } @else if (store.error()) {
        <div>{{store.error()}}</div>
      } @else {
        <div class="grid lg:grid-cols-1 gap-4 grid-cols-2">
          @for (progress of store.progress(); track progress.id) {
            <div class="card m-12 bg-base-100 shadow-xl image-full">
              <div class="card-body">
                <h2 class="card-title">{{progress.name}}</h2>
                  <ul class="steps md:steps-vertical steps-horizontal">
                    @for (milestone of progress.milestoneProgress; track milestone.id) {
                      <li class="step" [ngClass]="milestone.completed ? 'step-primary' : '' ">{{milestone.name}}</li>
                    }
                  </ul>
                
                  <p class="my-6">Earn the <strong>{{progress.achievement.name}}</strong> acheivement by completing this course!</p>
                  @if(getNextSuggestion(progress.milestoneProgress) >= 0) {
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary" [routerLink]="['../milestones', getNextSuggestion(progress.milestoneProgress) ]">Continue Improving</button>
                  </div>
                  }
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: ``,
  providers: [ProgressStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  store = inject(ProgressStore);

  getNextSuggestion(mp: MilestoneProgress[]): number {
      return mp.find(x => !x.completed)?.id ?? -1;
  }

}
