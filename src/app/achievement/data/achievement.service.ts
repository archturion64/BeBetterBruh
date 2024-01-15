import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { BackEndSimService } from '../../core/back-end-sim.service';
import { UserAchievement } from '../../api.model';



@Injectable()
export class AchievementService {

    private beSim = inject(BackEndSimService);

    getUserAcheivements(): Observable<UserAchievement[]> {
        return of(this.beSim.getAcheivements()).pipe(delay(1000));
    }
}
