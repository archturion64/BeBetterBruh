import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeSwitcherComponent, CommonModule],
  template: `
  <div class="navbar grid bg-primary rounded-b-xl">
    <div class="md:navbar-start">
      <div class="md:dropdown">
      <div tabindex="0" role="button" class="hidden md:btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
        <ul tabindex="0" class=" flex gap-4 md:menu md:menu-sm dropdown-content md:mt-3 md:z-[99] md:p-2 md:shadow md:bg-base-100 md:rounded-box md:w-52">
          <li>
            <a class="btn btn-ghost text-xl col-span-1" 
              (click)="routerUrl='/'"
              [ngClass]="routerUrl == '/' ? '!bg-secondary' : '' "  
              [routerLink] = "['/']">
              Home
            </a>
          </li>
          <li>
            <a class="btn btn-ghost text-xl col-span-1" 
              (click)="routerUrl='/progress'" 
              [ngClass]="routerUrl == '/progress' ? '!bg-secondary' : '' "  
              [routerLink] = "['/progress']">
              My Progress
            </a>
          </li>
          <li>
            <a class="btn btn-ghost text-xl col-span-1" 
              (click)="routerUrl='/milestones'" 
              [ngClass]="routerUrl == '/milestones' ? '!bg-secondary' : '' "  
              [routerLink] = "['/milestones']">
              Milestones
            </a>
          </li>
          <li>
            <a class="btn btn-ghost text-xl col-span-1"
              (click)="routerUrl='/achievements'" 
              [ngClass]="routerUrl == '/achievements' ? '!bg-secondary' : '' "  
              [routerLink] = "['/achievements']">
              Achievements
            </a>
          </li>
        </ul>
      </div>
    </div>

    <app-theme-switcher class="col-end-7 col-span-1" [useDarkMode]="useDarkMode" (useDarkModeChange)="useDarkModeChange.emit($event)"></app-theme-switcher>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  routerUrl = '/';

  // workaround for wrong reported url when direct navigation to lazy loaded module
  activatedRoute = inject(ActivatedRoute);
  _ = inject(Router).events.pipe(
    takeUntilDestroyed(),
    filter(val => val instanceof NavigationEnd),
    /* @ts-ignore  */ 
    map((_) => this.activatedRoute._routerState.snapshot.url),
  ).subscribe({next: (data) => this.routerUrl = String(data)});
  

  @Input({required: true}) useDarkMode!: boolean;
  @Output() useDarkModeChange = new EventEmitter<boolean>();
}
