import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MilestoneService } from './data/milestone.service';
import { LoadingIndicatorComponent } from "../common/loading-indicator/loading-indicator.component";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MilestoneStore } from './data/milestone.store';
import { ButtonWithFeedbackComponent } from "../common/button-with-feedback/button-with-feedback.component";

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
    providers: [
        MilestoneService,
        MilestoneStore
    ],
    exports: [RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoadingIndicatorComponent,
        ButtonWithFeedbackComponent
    ]
})
export class MilestoneModule { }
