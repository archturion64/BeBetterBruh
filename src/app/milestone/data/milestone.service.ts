import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { BackEndSimService } from '../../core/back-end-sim.service';
import { MilestoneDetailsProgress, MilestoneItem } from '../../api.model';



@Injectable()
export class MilestoneService {

    private beSim = inject(BackEndSimService);


    getMilestones(): Observable<MilestoneItem[]> {
        return of(this.beSim.getUnfinishedMilestones()).pipe(delay(1000));
    }

    getMilestoneDetailsProgress(id: number): Observable<MilestoneDetailsProgress> {
        try {
            return of(this.beSim.getMilestoneDetailsProgress(id)).pipe(delay(1000));
        } catch (err) {
            return throwError( err)
        }
    }

    completeMilestone(id: number): Observable<void> {
        try {
            return of(this.beSim.completeMilestone(id)).pipe(delay(1000));
        } catch (err) {
            return throwError( err)
        }
    }
}
