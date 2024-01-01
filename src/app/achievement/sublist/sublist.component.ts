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
            description="You know something about web design."
            imgFile="pixel" >
          </achievement-item>
        }
        @case (1) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="You have knoledge of JavaScript and its eco-system."
            imgFile="move" >
          </achievement-item>
        }
        @case (2) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="You know what are tests and how to do them."
            imgFile="test" >
          </achievement-item>
        }
        @case (3) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="You are familiar with common attackt vectors from the API penetration testing domain."
            imgFile="attck" >
          </achievement-item>
        }
        @case (4) {
          <achievement-item class="flex" 
            [ngClass]="achievement.completed ? '' : 'opacity-50' "
            title="{{achievement.name}}"
            description="You have completed all existing challenges at the moment."
            imgFile="moar" >
          </achievement-item>
        }
        @default {
          <div>Unknownt Achievement</div>
        }
      }
    } @empty {
      <h1 class="text-xl italic m-5">List is empty.</h1>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SublistComponent {

  @Input({required: true}) achievements!: UserAchievement[];

}
