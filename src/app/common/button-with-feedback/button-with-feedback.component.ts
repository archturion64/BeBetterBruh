import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, importProvidersFrom } from '@angular/core';
import { CallState } from '../call-state-feature';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/achievement/', '_merged.json');
}

@Component({
  selector: 'common-button-with-feedback',
  standalone: true,
  imports: [
    TranslateModule
  ],
  template: `
    @switch(callState) {
      @case ('init') {
        <button type="button" class="btn btn-primary" (click)="clickEvent.emit()">{{'common.buttonWithFeedback.complete' | translate}}</button>
      }
      @case ('loading') {
        <button type="button" class="btn btn-primary">{{'common.buttonWithFeedback.loading' | translate}} <span class="loading loading-dots loading-md"></span></button>
      }
      @case ('loaded') {
        <button type="button" class="btn btn-success">{{'common.buttonWithFeedback.done' | translate}}</button>
      }
      @default {
        <button type="button" class="btn btn-error">{{'common.buttonWithFeedback.error' | translate}}</button>
      }
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWithFeedbackComponent {

  @Input({required: true}) callState: CallState = 'init';
  @Output() clickEvent = new EventEmitter<void>(); 
}
