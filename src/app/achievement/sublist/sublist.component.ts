import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserAchievement } from '../../api.model';

@Component({
  selector: 'achievement-sublist',
  template: `
    @for (achievement of achievements; track achievement.id) {
      @switch (achievement.id) {
        @case (0) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="{{'achievement.description.pixel' | translate}}"
            imgFile="pixel"/>
        }
        @case (1) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="{{'achievement.description.move' | translate}}"
            imgFile="move"/>
        }
        @case (2) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="{{'achievement.description.test' | translate}}"
            imgFile="test"/>
        }
        @case (3) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="{{'achievement.description.attck' | translate}}"
            imgFile="attck"/>
        }
        @case (4) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="{{'achievement.description.moar' | translate}}"
            imgFile="moar"/>
        }
        @default {
          <div>{{'achievement.unknown' | translate}}</div>
        }
      }
    } @empty {
      <h1 class="text-xl italic m-5">{{'achievement.empty' | translate}}</h1>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SublistComponent {

  @Input({required: true}) achievements!: UserAchievement[];

}
