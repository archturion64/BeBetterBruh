
export interface UserProgress {
    id: number,
    name: string,
    milestoneProgress: MilestoneProgress[],
    achievement: Achievement
}

export interface Milestone {
    id: number
    name: string
}

export interface MilestoneProgress extends Milestone {
    completed: boolean
}


export interface MilestoneItem extends Milestone {
    description: string
}

export interface MilestoneDetails extends Milestone {
    content: string
}

export interface Achievement {
    id: number,
    name: string
}

export interface UserAchievement extends Achievement {
    completed: boolean
}


