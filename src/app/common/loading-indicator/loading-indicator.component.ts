import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'common-loading-indicator',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col items-center justify-center p-8">
      <div class="loading loading-dots loading-lg"></div>
      <div class="text-xl">Loading. Please stand by...</div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent {

}
