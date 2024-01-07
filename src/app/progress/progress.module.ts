import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingIndicatorComponent } from '../common/loading-indicator/loading-indicator.component';
import { ProgressService } from './data/progress.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    LoadingIndicatorComponent,
    NgClass
  ],
  providers: [
    ProgressService
  ],
  exports: [RouterModule]
})
export class ProgressModule { }
