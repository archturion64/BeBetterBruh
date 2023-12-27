import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <div [attr.data-theme]="(useDarkMode ? 'dark' : 'cupcake')">
        <app-navbar [(useDarkMode)]="useDarkMode" (useDarkModeChange)="onThemeChange($event)"></app-navbar>
        <router-outlet></router-outlet>
      </div>
    `,
    styles: ``,
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Be better, Bruh!';


  useDarkMode: boolean = localStorage.getItem('useDarkMode') === 'true';

  onThemeChange(useDarkMode: boolean) {
    localStorage.setItem('useDarkMode', String(useDarkMode));
  }
 
}
