import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <div class="container mx-auto min-h-screen shadow-lg flex flex-col items-center rounded-2xl"
        [attr.data-theme]="(useDarkMode ? 'grufty' : 'blondy')">
        <app-navbar class="w-full sticky top-0 z-50" [(useDarkMode)]="useDarkMode" (useDarkModeChange)="onThemeChange($event)"/>
        <router-outlet/>
      </div>
      @defer (on viewport) {
        <app-footer/>
      }
      @placeholder {
        <div class="skeleton w-full h-20" ></div>
      }
      
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Be better, Bruh!';


  useDarkMode: boolean = localStorage.getItem('useDarkMode') === 'true';

  onThemeChange(useDarkMode: boolean) {
    localStorage.setItem('useDarkMode', String(useDarkMode));
  }
 
}
