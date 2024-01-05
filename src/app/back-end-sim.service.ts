import { Injectable } from '@angular/core';
import { Achievement, Milestone, MilestoneDetails, MilestoneDetailsProgress, MilestoneItem, MilestoneProgress, UserAchievement, UserProgress } from './api.model';


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
  private readonly acheivement4: Achievement = { id: 4, name: 'Moar' };

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
      description: "Build tools, package managers and servers."
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
      content: `
      HTML, or HyperText Markup Language, is the standard language used to create and design documents on the World Wide Web. It serves as the backbone for structuring content on web pages. HTML allows you to organize text, images, links, forms, and other types of media into a cohesive and visually appealing format. Here's a brief overview of how HTML works:
      
      Tags: HTML documents are made up of HTML tags, which are enclosed in angle brackets (< >). Tags are used to define and structure the content of a webpage. They usually come in pairs – an opening tag and a closing tag – with the content placed between them.
      <tagname>Content goes here</tagname>
      For example:
        <p>This is a paragraph.</p>
  
      Elements: An HTML tag and its content together form an HTML element. Elements are the building blocks of a webpage. Some common HTML elements include headings (<h1>, <h2>, ... <h6>), paragraphs (<p>), lists (<ul>, <ol>, <li>), links (<a>), images (<img>), and more.
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
  
      Attributes: HTML tags can also have attributes, which provide additional information about the element. Attributes are always included in the opening tag and are usually in name/value pairs.
        <tagname attribute="value">Content goes here</tagname>
      For example: 
        <a href="https://www.example.com">Visit Example.com</a>
  
      Document Structure: An HTML document typically has a structure that includes a head and a body. The head contains meta-information about the document, such as the title and links to stylesheets or scripts. The body contains the actual content of the webpage.
        <!DOCTYPE html>
        <html>
          <head>
            <title>Document Title</title>
          </head>
          <body>
            <!-- Content goes here -->
          </body>
        </html>
  
      Nesting: HTML elements can be nested inside one another. Nesting should follow a proper hierarchy, and closing tags must match the opening tags in the correct order.
        <div>
          <p>This paragraph is nested inside a div element.</p>
        </div>
  
      HTML5: HTML has evolved over the years, and the latest version is HTML5. HTML5 introduced new semantic elements like <header>, <nav>, <article>, <section>, <footer>, etc., which provide a clearer structure to web documents.
  
      This is just a basic introduction to HTML. As you explore web development further, you'll encounter CSS (Cascading Style Sheets) for styling and JavaScript for adding interactivity to your web pages, creating a complete and dynamic web experience.
      `
    },
    {
      ...this.milestone1,
      content: `
      CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation of a document written in HTML or XML. It defines how the elements of a web page should be displayed, including their layout, colors, fonts, and other visual aspects. The separation of content (HTML) and presentation (CSS) allows for greater flexibility and maintainability in web development. Here are the key concepts of CSS:

      Selectors and Declarations:
        Selectors: CSS uses selectors to target HTML elements that you want to style. Selectors can be based on element names, classes, IDs, attributes, and more.

          h1 {
            color: blue;
          }

          .my-class {
            font-size: 16px;
          }

        Declarations: Declarations consist of a property and a value. They define the style rules for the selected elements.

          selector {
              property: value;
          }

      Properties and Values:
        Properties: These are the specific style attributes you want to change, such as color, font-size, margin, padding, etc.
        Values: These are the specific settings you apply to the properties, such as red, 12px, 20%, center, etc.

          p {
              color: green;
              font-size: 18px;
              margin-top: 10px;
          }

      Selectors Hierarchy and Specificity:
      CSS rules can be more specific by combining multiple selectors or using more specific selectors like IDs. Specificity determines which style rule is applied when conflicting rules exist.

        /* More specific selector */
        #unique-id .specific-class {
            color: purple;
        }

      Box Model:
      The box model describes how elements are structured in terms of content, padding, border, and margin.
      CSS properties like width, height, padding, border, and margin are used to control the dimensions and spacing of elements.

        .box {
            width: 200px;
            height: 100px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 20px;
        }

      Flexbox and Grid:
      CSS provides layout mechanisms like Flexbox and Grid to create more sophisticated and responsive page layouts.

        .flex-container {
            display: flex;
            justify-content: space-between;
        }

      Responsive Design:
          Media queries allow you to apply different styles based on the characteristics of the device, such as screen size, resolution, or orientation.

          @media screen and (max-width: 600px) {
              body {
                  font-size: 14px;
              }
          }

      Transitions and Animations:
          CSS can be used to create smooth transitions between different states of an element and animations for dynamic effects.

          .transition-example {
              transition: all 0.3s ease-in-out;
          }

      Vendor Prefixes:
          Some CSS properties might require vendor prefixes to ensure compatibility with different web browsers.

            .example {
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
            }

      CSS is a powerful tool that, when used effectively, can significantly enhance the visual appeal and functionality of a website. It works hand-in-hand with HTML and JavaScript to create modern and responsive web pages.
      `
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

  getAcheivements(): UserAchievement[] {
    const userProgress: UserProgress[] = this.getUserProgress();
    const userAchievement: UserAchievement[] =  userProgress.map(p => ({...p.achievement, completed: p.milestoneProgress.every(m => m.completed)}));
    userAchievement.push({...this.acheivement4, completed: userAchievement.every(x => x.completed)});
    return userAchievement;
  }

  getUserProgress(): UserProgress[] {
    return this.knoledgePaths.map(x => ({ ...x, milestoneProgress: this.getMilestoneProgress(x.milestones)}));
  }

  getMilestoneDetailsProgress(id: number): MilestoneDetailsProgress {
    const milestoneProgress = this.getMilestoneProgress();
    const idx = milestoneProgress.findIndex(x => x.id === id);
    if (idx < 0) {
      throw new Error("invalid id");
    }

    const match = this.getUserProgress().find(x => x.milestoneProgress.some(y => y.id === id));
    if (match === undefined) {
      throw new Error("corrupted data");
    }

    const hasNewAchievement = match.milestoneProgress.filter(z => z.id !== id).every(a => a.completed === true) && match.milestoneProgress.find(x => x.id === id)!.completed === false;
    const hasCompletedAllAchievements = milestoneProgress.filter( x => x.id != id).every(a => a.completed === true);
    const onCompletion = [];
    if(hasNewAchievement) {
      onCompletion.push(match.achievement);
    }
    if(hasCompletedAllAchievements) {
      onCompletion.push(this.acheivement4);
    }
    
    return {...milestoneProgress[idx], content: this.milestoneDetails[idx].content, onCompletion};
  }

  completeMilestone(id: number): void {
    const idx = this.userMilestones.findIndex(x => x.id === id);
    if (idx < 0) {
      throw new Error("invalid id");
    }
    this.userMilestones[idx] = {...this.userMilestones[idx], completed: true};
  }

}
