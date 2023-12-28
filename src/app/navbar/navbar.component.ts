import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeSwitcherComponent, CommonModule],
  template: `
  <div class="navbar grid grid-cols-6 gap-4 bg-primary rounded-xl">
    <a class="btn btn-ghost text-xl col-span-1" 
      [ngClass]="router.url == '/' ? '!bg-secondary' : '' "  
      [routerLink] = "['/']">
      Home
    </a>
    <a class="btn btn-ghost text-xl col-span-1  " 
      [ngClass]="router.url == '/skills' ? '!bg-secondary' : '' "  
      [routerLink] = "['/skills']">
      Skills
    </a>
    <app-theme-switcher class="col-end-7 col-span-1" [useDarkMode]="useDarkMode" (useDarkModeChange)="useDarkModeChange.emit($event)"></app-theme-switcher>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  router = inject(Router);

  @Input({required: true}) useDarkMode!: boolean;
  @Output() useDarkModeChange = new EventEmitter<boolean>();
}
