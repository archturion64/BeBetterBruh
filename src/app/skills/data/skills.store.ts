import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Skill } from "./skills.model";
import { inject } from "@angular/core";
import { SkillsService } from "./skills.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { setLoading, withCallState, setError, setLoaded } from "../../common/call-state-feature";
import { HttpErrorResponse } from "@angular/common/http";



interface SkillsState {
    skills: Skill[],
}

export const SkillsStore = signalStore(
    withState<SkillsState>({
        skills: [],
    }),
    withCallState(),
    withCallState('update'),
    withMethods((store, skillsService = inject(SkillsService)) => ({
        loadSkills: rxMethod<void>(
            pipe(
                tap(() => patchState(store, setLoading())),
                switchMap(() =>  skillsService.getSkills().pipe(
                    tapResponse({
                        next: (skills) => {
                            patchState(store, {skills});
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
            store.loadSkills()
        }
    })
);

