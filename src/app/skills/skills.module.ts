import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsListComponent } from './list/skills-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsService } from './data/skills.service';

const routes: Routes = [
  {
    path: '',
    component: SkillsListComponent
  }
];

@NgModule({
  declarations: [
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SkillsService
  ],
  exports: [RouterModule]
})
export class SkillsModule { }
