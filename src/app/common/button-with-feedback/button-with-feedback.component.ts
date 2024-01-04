import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CallState } from '../call-state-feature';

@Component({
  selector: 'common-button-with-feedback',
  standalone: true,
  imports: [],
  template: `
    @switch(callState) {
      @case ('init') {
        <button type="button" class="btn btn-primary" (click)="clickEvent.emit()">complete</button>
      }
      @case ('loading') {
        <button type="button" class="btn btn-primary">loading <span class="loading loading-dots loading-md"></span></button>
      }
      @case ('loaded') {
        <button type="button" class="btn btn-success">done!</button>
      }
      @default {
        <button type="button" class="btn btn-error">error!</button>
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
