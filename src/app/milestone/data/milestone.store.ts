import { MilestoneDetailsProgress } from './../../api.model';
import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { inject } from "@angular/core";
import { MilestoneService } from "./milestone.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { setLoading, withCallState, setError, setLoaded, setInit } from "../../common/call-state-feature";
import { MilestoneItem } from "../../api.model";




interface MilestoneState {
    milestones: MilestoneItem[],
    milestoneDetails: MilestoneDetailsProgress | null
}

export const MilestoneStore = signalStore(
    withState<MilestoneState>({
        milestones: [],
        milestoneDetails: null
    }),
    withCallState(),
    withCallState('details'),
    withCallState('complete'),
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
        ),
        getMilestone: rxMethod<number>(
            pipe(
                tap(() => patchState(store, setLoading('details'))),
                switchMap((id) =>  milestoneService.getMilestoneDetailsProgress(id).pipe(
                    tapResponse({
                        next: (milestoneDetails) => {
                            patchState(store, {milestoneDetails});
                            patchState(store, setLoaded('details'));
                        },
                        error: (err: Error) => {
                            patchState(store, setError(err.message, 'details'))

                        
                        }
                      })
                )
                ),
            )
        ),
        completeMilestone: rxMethod<number>(
            pipe(
                tap(() => patchState(store, setLoading('complete'))),
                switchMap((id) =>  milestoneService.completeMilestone(id).pipe(
                    tapResponse({
                        next: () => {
                            patchState(store, {milestoneDetails: store.milestoneDetails() === null ? null : {...store.milestoneDetails()!, completed: true}});
                            patchState(store, {milestones: store.milestones().filter(x => x.id !== id)});
                            patchState(store, setLoaded('complete'));
                        },
                        error: (err: Error) => {
                            patchState(store, setError(err.message, 'complete'))
                        }
                      })
                )
                ),
            )
        ),
        clearCompleteState: () => patchState(store, setInit('complete'))
    })),
    withHooks({
        onInit(store) {
            store.loadMilestones()
        }
    })
);

