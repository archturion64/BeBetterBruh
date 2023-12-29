import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeSwitcherComponent, CommonModule],
  template: `
  <div class="navbar grid grid-cols-6 gap-4 bg-primary rounded-xl">
    @if(routerUrl$ | async; as routerUrl) {
      <a class="btn btn-ghost text-xl col-span-1" 
      [ngClass]="routerUrl == '/' ? '!bg-secondary' : '' "  
      [routerLink] = "['/']">
      Home
    </a>
    <a class="btn btn-ghost text-xl col-span-1  " 
      [ngClass]="routerUrl == '/skills' ? '!bg-secondary' : '' "  
      [routerLink] = "['/skills']">
      Skills
    </a>
    }

    <app-theme-switcher class="col-end-7 col-span-1" [useDarkMode]="useDarkMode" (useDarkModeChange)="useDarkModeChange.emit($event)"></app-theme-switcher>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  // workaround for wrong reported url when direct navigation to lazy loaded module
  activatedRoute = inject(ActivatedRoute);
  routerUrl$ = inject(Router).events.pipe(
    filter(val => val instanceof NavigationEnd),
    /* @ts-ignore  */ 
    map((_) => this.activatedRoute._routerState.snapshot.url)
  );
  

  @Input({required: true}) useDarkMode!: boolean;
  @Output() useDarkModeChange = new EventEmitter<boolean>();
}
