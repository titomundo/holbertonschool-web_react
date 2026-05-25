interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

interface IStudentClass {
	firstName: string;
	lastName: string;
}

class StudentClass implements IStudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return "Currently working";
	}

	displayName() {
		return this.firstName;
	}
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
	`${firstName[0]}. ${lastName}`;

const director1: Directors = {
	firstName: "John",
	lastName: "Doe",
	location: "London",
	fullTimeEmployee: true,
	numberOfReports: 17,
};

const teacher3: Teacher = {
	firstName: "John",
	fullTimeEmployee: false,
	lastName: "Doe",
	location: "London",
	contract: false,
};

console.log(teacher3);
console.log(director1);
console.log(printTeacher(teacher3.firstName, teacher3.lastName));

