import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'common-notification',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if(visible) {
      <div class="max-w-md mx-auto z-50 fixed inset-0">
        @for (achievement of achievements; track achievement) {
          <div role="alert" class="alert shadow-lg animate-fade mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <h3 class="text-lg animate-fade">New achievement unlocked:</h3>
              <div class="m-3 font-bold animate-fade">"{{achievement}}"</div>
            </div>
            <button class="btn btn-sm animate-fade" routerLink="/achievements">See all</button>
          </div>
        }
      </div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit  {

  @Input({required: true}) achievements: string[] = [];

  visible: boolean = true;
  private cd = inject(ChangeDetectorRef);

  ngOnInit() {
    setTimeout(() => {
      this.visible = false;
      this.cd.markForCheck();
    }, 4000);
  }
}
