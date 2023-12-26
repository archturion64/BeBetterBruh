import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkillsStore } from '../data/skills.store';

@Component({
  selector: 'skills-skills-list',
  template: `
    <div>
      @if (store.isLoading()) {
        <div>Loading</div>
      } @else if (store.error()) {
        <div>{{store.error()}}</div>
      } 
    </div>
    <div>
      @for (skill of store.skills(); track skill.id) {
        {{ skill.name }}
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SkillsStore]
})
export class SkillsListComponent {

  store = inject(SkillsStore);

}
