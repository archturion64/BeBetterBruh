import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <div class="hero bg-base-200 my-20 rounded-xl">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold m-5">{{'app.wellcome.title' | translate}}</h1>
          <div>Join me on a journey of knowledge exploration, at the end of which you will recieve the sweet sweet Dopamine rush from the Dunning-Kruger effect.</div>
          <br/>
          <div>You can find all open learning objectives in the milestones tab.</div>
          <div>You can track your progress in the progress tab.</div>
          <button class="btn btn-primary mt-5" routerLink="/progress">Get Started</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  _ = inject(TranslateService).setDefaultLang('en');
}