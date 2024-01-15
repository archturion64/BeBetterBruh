import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilestoneService } from './data/milestone.service';
import { LoadingIndicatorComponent } from "../common/loading-indicator/loading-indicator.component";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MilestoneStore } from './data/milestone.store';
import { ButtonWithFeedbackComponent } from "../common/button-with-feedback/button-with-feedback.component";
import { NotificationComponent } from "../common/notification/notification.component";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

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

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/milestone/', '.json');
}

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
        RouterModule.forChild(routes),
        LoadingIndicatorComponent,
        ButtonWithFeedbackComponent,
        NotificationComponent,
        TranslateModule.forChild({
          loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          },
          isolate: false
      })
    ]
})
export class MilestoneModule { }
