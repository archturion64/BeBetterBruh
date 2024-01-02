import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'milestone-item',
  template: `
    <p>
      {{id}}
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() id?: string

}
