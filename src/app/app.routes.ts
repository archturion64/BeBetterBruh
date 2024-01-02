import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {   
        path: '', 
        pathMatch: 'full',
        component: WelcomeComponent 
    },
    {
        path: 'progress',
        loadChildren: () => import('./progress/progress.module').then(m => m.ProgressModule)
    },
    {
        path: 'milestones',
        loadChildren: () => import('./milestone/milestone.module').then(m => m.MilestoneModule)
    },
    {
        path: 'achievements',
        loadChildren: () => import('./achievement/achievement.module').then(m => m.AchievementModule)
    },
    { 
        path: '**', 
        component: PageNotFoundComponent }
];
