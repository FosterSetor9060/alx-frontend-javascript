import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Declaration merging to add optional attribute
declare module './Teacher' {
  namespace Subjects {
    interface Teacher {
      experienceTeachingC?: number;
    }
  }
}

export namespace Subjects {
  export class Cpp extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

