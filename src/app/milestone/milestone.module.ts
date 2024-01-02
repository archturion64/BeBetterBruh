import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MilestoneService } from './data/milestone.service';
import { LoadingIndicatorComponent } from "../common/loading-indicator/loading-indicator.component";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path: ':id',
    component: ItemComponent
  }
];

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoadingIndicatorComponent
  ],
  providers: [
      MilestoneService
  ],
  exports: [RouterModule]
})
export class MilestoneModule { }
