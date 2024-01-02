import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'achievement-item',
  template: `
    
    @defer (on viewport) {
      <commmon-achievement [title]="title" [description]="description" [imgFile]="imgFile" ></commmon-achievement>
    }
    @placeholder {
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
