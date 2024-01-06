import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { MilestoneStore } from '../data/milestone.store';
import { MilestoneDetailsProgress } from '../../api.model';

@Component({
  selector: 'milestone-item',
  host: {
    class: 'container'
  },
  template: `
    <div class="text-sm breadcrumbs m-5">
      <ul>
        <li><a routerLink="/milestones">Milestones</a></li> 
        <li>Current Milestone</li>
      </ul>
    </div>

    @if (store.detailsLoading()) {
        <common-loading-indicator></common-loading-indicator>

    } @else if (store.detailsError()) {
      <div>{{store.detailsError()}}</div>
    } @else if(store.milestoneDetails()) {
      @if(store.completeLoaded() && store.milestoneDetails()!.onCompletion.length > 0) {
        @defer (on viewport) {
          <common-notification [achievements]="getAchievementNames(store.milestoneDetails())"></common-notification>
        }
        @placeholder {
          <div class="skeleton max-w-md mx-auto z-50 h-28 fixed inset-0"></div>
        }
      }
      
      <div class="m-5 flex flex-col">
        <h2 class="text-2xl text-center">{{store.milestoneDetails()?.name}}</h2>
        <div class="whitespace-pre-line overflow-auto">{{store.milestoneDetails()?.content}}</div>
        <div class="m-10 grid grid-cols-8 md:grid-cols-2  gap-4">
          <button type="button" class="btn" routerLink="/milestones">back to milestones</button>
          @if (!store.milestoneDetails()!.completed || store.completeLoaded()) {
            <common-button-with-feedback 
              [callState]="store.completeCallState()" 
              (clickEvent)="onComplete()">
            </common-button-with-feedback>
          }
        </div>
      </div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input() id!: string; // router param

  store = inject(MilestoneStore);

  ngOnInit(): void {
    this.store.getMilestone(Number(this.id));
  }

  ngOnDestroy(): void {
    this.store.clearCompleteState();
  }

  onComplete() {
    this.store.completeMilestone(this.store.milestoneDetails()?.id ?? -1);
  }

  getAchievementNames(progress: MilestoneDetailsProgress|null): string[] {
    return progress?.onCompletion.map(x => x.name) ?? []
  }

}
