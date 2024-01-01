import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { inject } from "@angular/core";
import { AchievementService } from "./achievement.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { setLoading, withCallState, setError, setLoaded } from "../../common/call-state-feature";
import { UserAchievement } from "../../api.model";




interface AchievementState {
    achievementsDone: UserAchievement[],
    achievementsTodo: UserAchievement[],
}

export const AchievementStore = signalStore(
    withState<AchievementState>({
        achievementsDone: [],
        achievementsTodo: []
    }),
    withCallState(),
    withMethods((store, achievementService = inject(AchievementService)) => ({
        loadAchievements: rxMethod<void>(
            pipe(
                tap(() => patchState(store, setLoading())),
                switchMap(() =>  achievementService.getUserAcheivements().pipe(
                    tapResponse({
                        next: (achievements) => {
                            patchState(store, {
                                achievementsDone: achievements.filter(a => a.completed),
                                achievementsTodo: achievements.filter(a => !a.completed),
                            });
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
            store.loadAchievements()
        }
    })
);

