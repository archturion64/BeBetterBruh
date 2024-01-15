import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AchievementStore } from '../data/achievement.store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  host: {
    class:'container'
  },
  selector: 'achievement-list',
  template: `
    <div>
      @if (store.loading()) {
        <common-loading-indicator/>
      } @else if (store.error()) {
        <div>{{store.error()}}</div>
      } @else {
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-1">
          <div>
            <h1 class="text-2xl font-bold m-5 mt-20">{{'achievement.title.todos' | translate}}</h1>
            <achievement-sublist [achievements]="store.achievementsTodo()"/>
          </div>
          <div>
            <h1 class="text-2xl font-bold m-5 mt-20">{{'achievement.title.done' | translate}}</h1>
            <achievement-sublist [achievements]="store.achievementsDone()"/>
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
  _ = inject(TranslateService).setDefaultLang('en');
}
