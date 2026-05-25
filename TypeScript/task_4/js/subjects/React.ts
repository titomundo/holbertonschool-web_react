namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends Subject{
		getRequirements() {
			return "Here is the list of requirements for React";
		}

		getAvailableTeacher() {
			if (this.teacher.experienceTeachingC !== undefined) {
				return this.teacher.firstName;
			}

			return "No available teacher";
		}
	}
}
