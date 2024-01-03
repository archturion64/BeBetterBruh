import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { MilestoneStore } from '../data/milestone.store';

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
      <div class="m-5 flex flex-col">
        <h2 class="text-2xl text-center">{{store.milestoneDetails()?.name}}</h2>
        <div class="whitespace-pre-line overflow-auto">{{store.milestoneDetails()?.content}}</div>
        <div class="m-10 grid grid-cols-8 md:grid-cols-2  gap-4">
          <button type="button" class="btn" routerLink="/milestones">back to milestones</button>
          @if (store.milestoneDetails()?.completed) {
            <button type="button" class="btn btn-primary" disabled>completed</button>
          } @else {
            <button type="button" class="btn btn-primary" (click)="store.completeMilestone(store.milestoneDetails()?.id ?? -1)">complete</button>
          }
          
        </div>
      </div>
     
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input() id!: string; // router param

  store = inject(MilestoneStore);

  ngOnInit(): void {
    this.store.getMilestone(Number(this.id));
  }

}
