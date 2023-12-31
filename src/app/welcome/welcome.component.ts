import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  template: `
    <div class="hero bg-base-200 my-20 rounded-xl">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold m-5">Greetings, Bruh!</h1>
          <div>Join me on a journey of knoledge exploration, at the end of which you will recieve the sweet sweet Dopamine rush from the Dunning-Kruger effect.</div>
          <br/>
          <div>You can find all open learning objectives in the milestones tab.</div>
          <div>You can track your progress in the progress tab.</div>
          <button class="btn btn-primary mt-5">Get Started</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

}