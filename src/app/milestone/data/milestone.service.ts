import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { BackEndSimService } from '../../back-end-sim.service';
import { MilestoneProgress } from '../../api.model';



@Injectable()
export class MilestoneService {

    private beSim = inject(BackEndSimService);


    getMilestones(): Observable<MilestoneProgress[]> {
        return of(this.beSim.getUnfinishedMilestones()).pipe(delay(2000));
    }
}
