import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Skill } from "./skills.model";
import { computed, inject } from "@angular/core";
import { SkillsService } from "./skills.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { setError, setLoaded, setLoading, withCallState } from "../../common/call-state-feature";



interface SkillsState {
    skills: Skill[],
}

export const SkillsStore = signalStore(
    withState<SkillsState>({
        skills: [],
    }),
    withCallState(),
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
                        error: () => patchState(store,setError('Error'))
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

