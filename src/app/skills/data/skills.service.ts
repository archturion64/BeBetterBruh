import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Skill, SkillLevel } from './skills.model';

@Injectable()
export class SkillsService {

    private skills: Skill[] = [
        {
            id: 0,
            name: 'HTML',
            description: 'hyper text markup language',
            progress: 90,
            level: SkillLevel.EXPERT
        },
        {
            id: 1,
            name: 'CSS',
            description: 'cascading style sheets',
            progress: 40,
            level: SkillLevel.EXPERIENCED
        },
        {
            id: 2,
            name: 'JavaScript',
            description: 'a language',
            progress: 66,
            level: SkillLevel.NOVICE
        }
    ]


    getSkills(): Observable<Skill[]> {
        return of(this.skills).pipe(delay(2000));
    }
}
