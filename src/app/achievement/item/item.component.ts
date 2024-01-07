import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'achievement-item',
  host: {
    class: "mt-10 m-5"
  },
  template: `
    
    @defer (on viewport) {
      <common-achievement [title]="title" [description]="description" [imgFile]="imgFile"/>
    }
    @placeholder {
      <div class="skeleton"></div>
    }
    @loading {
      <div class="skeleton"></div>
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
