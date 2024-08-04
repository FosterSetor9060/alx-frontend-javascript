import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Declaration merging to add optional attribute
declare module './Teacher' {
  namespace Subjects {
    interface Teacher {
      experienceTeachingReact?: number;
    }
  }
}

export namespace Subjects {
  export class React extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
