import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'achievement-item',
  template: `
    
    @defer (on viewport) {
      <div class="card card-side shadow-xl w-4/6 lg:w-full mt-10 m-5 bg-neutral grid grid-cols-6">
        <figure><img class="object-contain h-48 mask mask-circle mx-2" src="assets/images/{{imgFile}}.png" width="50" height="50" alt="no image" /></figure>
        <div class="card-body col-span-5">
          <h2 class="card-title text-neutral-content text-2xl">{{title}}</h2>
          <p class="text-neutral-content text-2xl">{{description}}</p>
        </div>
      </div>
    }
    @placeholder () {
      <div class="skeleton w-4/6 lg:w-full mt-10 m-5"></div>
    }
    @loading {
      <div class="skeleton w-4/6 lg:w-full mt-10 m-5"></div>
    }
    @error {
      <div>Something went wrong :(</div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) imgFile!: string;

}
