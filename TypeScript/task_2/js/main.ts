interface DirectorInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workDirectorTasks: () => string;
}

interface TeacherInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
	constructor() { }
	workFromHome() {
		return "Working from home";
	}

	getCoffeeBreak() {
		return "Getting a coffee break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	constructor() { }

	workFromHome() {
		return "Cannot work from home";
	}

	getCoffeeBreak() {
		return "Cannot have a break";
	}

	workTeacherTasks() {
		return "Getting to work";
	}
}

function createEmployee(salary: number | string): Teacher | Director {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher();
	}

	return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

type Subject = "Math" | "History";

function teachClass(todayClass: string) {
	if (todayClass === "Math") {
		return "Teaching Math";
	} else if (todayClass === "History") {
		return "Teaching History";
	}
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass("Math"));
console.log(teachClass("History"));
