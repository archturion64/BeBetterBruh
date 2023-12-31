import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [FormsModule],
  template: `
      <label class="flex cursor-pointer gap-2 md:flex-col flex-row">
        <span class="label-text">Blondy</span> 
        <input type="checkbox" class="toggle theme-controller" 
          [(ngModel)]="useDarkMode" (ngModelChange)="useDarkModeChange.emit(useDarkMode)" />
        <span class="label-text">Grufty</span> 
      </label>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent {

  @Input({required: true}) useDarkMode!: boolean;
  @Output() useDarkModeChange = new EventEmitter<boolean>();

}
