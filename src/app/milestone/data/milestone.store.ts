import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { inject } from "@angular/core";
import { MilestoneService } from "./milestone.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { setLoading, withCallState, setError, setLoaded } from "../../common/call-state-feature";
import { Milestone } from "../../api.model";




interface MilestoneState {
    milestones: Milestone[],
}

export const MilestoneStore = signalStore(
    withState<MilestoneState>({
        milestones: [],
    }),
    withCallState(),
    withCallState('update'),
    withMethods((store, milestoneService = inject(MilestoneService)) => ({
        loadMilestones: rxMethod<void>(
            pipe(
                tap(() => patchState(store, setLoading())),
                switchMap(() =>  milestoneService.getMilestones().pipe(
                    tapResponse({
                        next: (milestones) => {
                            patchState(store, {milestones});
                            patchState(store, setLoaded());
                        },
                        error: (err: Error) => patchState(store, setError(err.message))
                      }),
                )),
            )
        )
    })),
    withHooks({
        onInit(store) {
            store.loadMilestones()
        }
    })
);

