import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  template: `
    <button class="btn" (click)="openModal()">open modal</button>
<dialog #myElement class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">New Achievement:</h3>
    
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  @ViewChild('myElement') myElement!: ElementRef;

  openModal(){
    /* @ts-ignore */
    this.myElement.nativeElement.showModal()
  }
}
