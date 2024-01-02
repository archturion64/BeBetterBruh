import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingIndicatorComponent } from '../common/loading-indicator/loading-indicator.component';

import { AchievementService } from './data/achievement.service';
import { SublistComponent } from './sublist/sublist.component';
import { ItemComponent } from './item/item.component';
import { AchievementComponent } from "../common/achievement/achievement.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
    declarations: [
        ListComponent,
        SublistComponent,
        ItemComponent
    ],
    providers: [
        AchievementService
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoadingIndicatorComponent,
        AchievementComponent
    ]
})
export class AchievementModule { }
