import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
  <div class="flex flex-col my-40">
    <h1 class="text-3xl self-center ">404</h1>
    <div> Page not found. </div>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {

}
