import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeSwitcherComponent],
  template: `
  <div class="navbar bg-base-100 grid grid-cols-6 gap-4">
    <a class="btn btn-ghost text-xl col-span-1" [routerLink] = "['/']">Home</a>
    <a class="btn btn-ghost text-xl col-span-1" [routerLink] = "['/skills']">Skills</a>
    <app-theme-switcher class="col-end-7 col-span-1" [useDarkMode]="useDarkMode" (useDarkModeChange)="useDarkModeChange.emit($event)"></app-theme-switcher>
    
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input({required: true}) useDarkMode!: boolean;
  @Output() useDarkModeChange = new EventEmitter<boolean>();
}
