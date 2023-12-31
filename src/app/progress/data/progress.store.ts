import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { inject } from "@angular/core";
import { ProgressService } from "./progress.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { setLoading, withCallState, setError, setLoaded } from "../../common/call-state-feature";
import { Milestone, UserProgress } from "../../api.model";




interface ProgressState {
    progress: UserProgress[],
}

export const ProgressStore = signalStore(
    withState<ProgressState>({
        progress: [],
    }),
    withCallState(),
    withMethods((store, progressService = inject(ProgressService)) => ({
        loadProgress: rxMethod<void>(
            pipe(
                tap(() => patchState(store, setLoading())),
                switchMap(() =>  progressService.getUserProgress().pipe(
                    tapResponse({
                        next: (progress) => {
                            patchState(store, {progress});
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
            store.loadProgress()
        }
    })
);

