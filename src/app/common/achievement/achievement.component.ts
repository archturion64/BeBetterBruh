import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'commmon-achievement',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="card card-side shadow-xl bg-neutral grid grid-cols-6">
        <figure><img class="object-contain h-48 mask mask-circle mx-2" src="assets/images/{{imgFile}}.png" width="50" height="50" alt="no image" /></figure>
        <div class="card-body col-span-5">
          <h2 class="card-title text-neutral-content text-2xl">{{title}}</h2>
          <p class="text-neutral-content text-lg">{{description}}</p>
        </div>
      </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementComponent {

  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) imgFile!: string;
}
