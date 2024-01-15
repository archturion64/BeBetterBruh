import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingIndicatorComponent } from '../common/loading-indicator/loading-indicator.component';

import { AchievementService } from './data/achievement.service';
import { SublistComponent } from './sublist/sublist.component';
import { ItemComponent } from './item/item.component';
import { AchievementComponent } from "../common/achievement/achievement.component";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  }
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/achievement/', '_merged.json');
}

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
      NgClass,
      RouterModule.forChild(routes),
      LoadingIndicatorComponent,
      AchievementComponent,
      TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        },
        isolate: true
    })
    ]
})
export class AchievementModule { }
