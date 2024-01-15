import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'common-loading-indicator',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="flex flex-col items-center justify-center p-8">
      <div class="loading loading-dots loading-lg"></div>
      <div class="text-xl">{{'common.loadingIndicator.text' | translate}}</div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent {

}
