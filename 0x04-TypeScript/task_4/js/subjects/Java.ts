import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Declaration merging to add optional attribute
declare module './Teacher' {
  namespace Subjects {
    interface Teacher {
      experienceTeachingJava?: number;
    }
  }
}

export namespace Subjects {
  export class Java extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
