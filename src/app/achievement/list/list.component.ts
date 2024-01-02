import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AchievementStore } from '../data/achievement.store';

@Component({
  host: {
    class:'container'
  },
  selector: 'achievement-list',
  template: `
    <div>
      @if (store.loading()) {
        <common-loading-indicator></common-loading-indicator>
      } @else if (store.error()) {
        <div>{{store.error()}}</div>
      } @else {
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-1">
          <div>
          <h1 class="text-5xl font-bold m-5 mt-20">Achievements ToDo:</h1>
        <achievement-sublist [achievements]="store.achievementsTodo()"></achievement-sublist>
          </div>
          <div>
          <h1 class="text-5xl font-bold m-5 mt-20">My Achievements:</h1>
        <achievement-sublist [achievements]="store.achievementsDone()"></achievement-sublist>
          </div>
        </div>



      }
    </div>
  `,
  styles: ``,
  providers: [AchievementStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  store = inject(AchievementStore);
}
