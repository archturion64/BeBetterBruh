import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { BackEndSimService } from '../../back-end-sim.service';
import { MilestoneProgress, UserProgress } from '../../api.model';



@Injectable()
export class ProgressService {

    private beSim = inject(BackEndSimService);


    getUserProgress(): Observable<UserProgress[]> {
        return of(this.beSim.getUserProgress()).pipe(delay(1000));
    }
}
