import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl" [routerLink] = "['/']">Home</a>
    <a class="btn btn-ghost text-xl" [routerLink] = "['/skills']">Skills</a>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
