import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {   
        path: '', 
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
    }
];
