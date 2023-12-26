export enum SkillLevel {
    NOVICE = 'NOVICE',
    EXPERIENCED = 'EXPERIENCED',
    VETERAN = 'VETERAN',
    EXPERT = 'EXPERT'
}

export interface Skill {
    id: number,
    name: string,
    description: string,
    progress: number,
    level: SkillLevel
}
