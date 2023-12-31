import { Injectable } from '@angular/core';
import { Achievement, Milestone, MilestoneDetails, MilestoneItem, MilestoneProgress, UserProgress } from './api.model';


interface UserMilestones {
  id: number,
  completed: boolean
}

interface KnoledgePath {
  id: number,
  name: string,
  milestones: Milestone[],
  achievement: Achievement
}

@Injectable({
  providedIn: 'root'
})
export class BackEndSimService {

  private readonly acheivement0: Achievement = { id: 0, name: 'PixelMaster' };
  private readonly acheivement1: Achievement = { id: 1, name: 'TheJourney' };
  private readonly acheivement2: Achievement = { id: 2, name: 'Infiltrator' };
  private readonly acheivement3: Achievement = { id: 3, name: 'Defender' };

  private readonly achievements: Achievement[] = [
    this.acheivement0, this.acheivement1, this.acheivement2, this.acheivement3
  ];

  private readonly milestone0: Milestone = { id: 0, name: 'HTML' };
  private readonly milestone1: Milestone = { id: 1, name: 'CSS' };
  private readonly milestone2: Milestone = { id: 2, name: 'Pre-Pocessors' };
  private readonly milestone3: Milestone = { id: 3, name: 'CSS Frameworks' };
  private readonly milestone4: Milestone = { id: 4, name: 'JavaScript' };
  private readonly milestone5: Milestone = { id: 5, name: 'TypeScript' };
  private readonly milestone6: Milestone = { id: 6, name: 'JS Eco-System' };
  private readonly milestone7: Milestone = { id: 7, name: 'JS Frameworks' };
  private readonly milestone8: Milestone = { id: 8, name: 'Testing Concepts' };
  private readonly milestone9: Milestone = { id: 9, name: 'Unit Tests' };
  private readonly milestone10: Milestone = { id: 10, name: 'Integration Tests' };
  private readonly milestone11: Milestone = { id: 11, name: 'E2E Tests' };
  private readonly milestone12: Milestone = { id: 12, name: 'API Documentation' };
  private readonly milestone13: Milestone = { id: 13, name: 'Mass Assignment' };
  private readonly milestone14: Milestone = { id: 14, name: 'Query Pollution' };
  private readonly milestone15: Milestone = { id: 15, name: 'Data Pollution' };

  private readonly milestones: Milestone[] = [
    this.milestone0, this.milestone1, this.milestone2, this.milestone3,
    this.milestone4, this.milestone5, this.milestone6, this.milestone7,
    this.milestone8, this.milestone9, this.milestone10, this.milestone11,
    this.milestone12, this.milestone13, this.milestone14, this.milestone15
  ];

  private userMilestones0: UserMilestones = { id: 0, completed: false };
  private userMilestones1: UserMilestones = { id: 1, completed: false };
  private userMilestones2: UserMilestones = { id: 2, completed: false };
  private userMilestones3: UserMilestones = { id: 3, completed: false };
  private userMilestones4: UserMilestones = { id: 4, completed: false };
  private userMilestones5: UserMilestones = { id: 5, completed: false };
  private userMilestones6: UserMilestones = { id: 6, completed: false };
  private userMilestones7: UserMilestones = { id: 7, completed: false };
  private userMilestones8: UserMilestones = { id: 8, completed: false };
  private userMilestones9: UserMilestones = { id: 9, completed: false };
  private userMilestones10: UserMilestones = { id: 10, completed: false };
  private userMilestones11: UserMilestones = { id: 11, completed: false };
  private userMilestones12: UserMilestones = { id: 12, completed: false };
  private userMilestones13: UserMilestones = { id: 13, completed: false };
  private userMilestones14: UserMilestones = { id: 14, completed: false };
  private userMilestones15: UserMilestones = { id: 15, completed: false };

  private userMilestones: UserMilestones[] = [
    this.userMilestones0, this.userMilestones1, this.userMilestones2, this.userMilestones3,
    this.userMilestones4, this.userMilestones5, this.userMilestones6, this.userMilestones7,
    this.userMilestones8, this.userMilestones9, this.userMilestones10, this.userMilestones11,
    this.userMilestones12, this.userMilestones13, this.userMilestones14, this.userMilestones15,
  ];

  private readonly path0: KnoledgePath = {
    id: 0, 
    name: 'Web Design',
    milestones: [this.milestone0, this.milestone1, this.milestone2, this.milestone3],
    achievement: this.acheivement0
  };
  private readonly path1: KnoledgePath = { 
    id: 1, 
    name: 'Web Interaction',
    milestones: [this.milestone4, this.milestone5, this.milestone6, this.milestone7],
    achievement: this.acheivement1
  };
  private readonly path2: KnoledgePath = { 
    id: 2, 
    name: 'Testing',
    milestones: [this.milestone8, this.milestone9, this.milestone10, this.milestone11],
    achievement: this.acheivement2
  };
  private readonly path3: KnoledgePath = { 
    id: 3, 
    name: 'Pen Testing',
    milestones: [this.milestone12, this.milestone13, this.milestone14, this.milestone15],
    achievement: this.acheivement3
  }

  private readonly knoledgePaths: KnoledgePath[] = [
    this.path0, this.path1, this.path2, this.path3
  ]

  private milestoneItems: MilestoneItem[] = [
    {
      ...this.milestone0,
      description: "Learn the building blocks of the web page structure."
    },
    {
      ...this.milestone1,
      description: "Change, move, resize and color the web page."
    },
    {
      ...this.milestone2,
      description: "Make complex CSS look easy."
    },
    {
      ...this.milestone3,
      description: "Learn commonly used patterns as part of CSS frameworks."
    },
    {
      ...this.milestone4,
      description: "Create, remove and change page elements."
    },
    {
      ...this.milestone5,
      description: "Be more productive with a more structuresd approach to JS."
    },
    {
      ...this.milestone6,
      description: "Nuild tools, package managers ans servers."
    },
    {
      ...this.milestone7,
      description: "Angular, React, Vue, Svelte ..."
    },
    {
      ...this.milestone8,
      description: "Test theory, methodology and best practices."
    },
    {
      ...this.milestone9,
      description: "Doing unit tests."
    },
    {
      ...this.milestone10,
      description: "Doing integration tests."
    },
    {
      ...this.milestone11,
      description: "End-to-end tests."
    },
    {
      ...this.milestone12,
      description: "Getting used to APIs and their quirks."
    },
    {
      ...this.milestone13,
      description: "Searching for mass assignment vulnerabilities."
    },
    {
      ...this.milestone14,
      description: "Query pollution attacks."
    },
    {
      ...this.milestone15,
      description: "Exploiting data pollution bugs."
    },
  ]

  private milestoneDetails: MilestoneDetails[] = [
    {
      ...this.milestone0,
      content: "This is a description for HTML"
    },
    {
      ...this.milestone1,
      content: "This is a description for CSS"
    },
    {
      ...this.milestone2,
      content: "This is a description for Pre-Pocessors"
    },
    {
      ...this.milestone3,
      content: "This is a description for CSS Frameworks"
    },
    {
      ...this.milestone4,
      content: "This is a description for JavaScript"
    },
    {
      ...this.milestone5,
      content: "This is a description for TypeScript"
    },
    {
      ...this.milestone6,
      content: "This is a description for JS Eco System"
    },
    {
      ...this.milestone7,
      content: "This is a description for JS Frameworks"
    },
    {
      ...this.milestone8,
      content: "This is a description for Testing Concepts"
    },
    {
      ...this.milestone9,
      content: "This is a description for Unit Tests"
    },
    {
      ...this.milestone10,
      content: "This is a description for Integration Tests"
    },
    {
      ...this.milestone11,
      content: "This is a description for E2E Tests"
    },
    {
      ...this.milestone12,
      content: "This is a description for API Documentation"
    },
    {
      ...this.milestone13,
      content: "This is a description for Mass Assignment"
    },
    {
      ...this.milestone14,
      content: "This is a description for Query Pollution"
    },
    {
      ...this.milestone15,
      content: "This is a description for Data Pollution"
    },
  ]

  private getMilestoneProgress(milestones?: Milestone[]): MilestoneProgress[] {
    if(milestones) {
      return milestones.map( (m) => ({...m, completed: this.userMilestones.find(e => e.id === m.id)?.completed ?? false }) );
    }
    return this.milestones.map((m, i) => ({...m, completed: this.userMilestones[i].completed}));
  }

  getUnfinishedMilestones(): MilestoneItem[] {
    return this.getMilestoneProgress().filter(x => !x.completed).map((y, i) => ({...y, description: this.milestoneItems[i].description}));
  }

  getAcheivements(): Achievement[] {
    const userProgress: UserProgress[] = this.knoledgePaths.map(x => ({...x, milestoneProgress: this.getMilestoneProgress(x.milestones)}));
    return userProgress.filter(p => p.milestoneProgress.every(m => m.completed)).map(x => x.achievement);
  }

  getUserProgress(): UserProgress[] {
    return this.knoledgePaths.map(x => ({ ...x, milestoneProgress: this.getMilestoneProgress(x.milestones)}));
  }
}
