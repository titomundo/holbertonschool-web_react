interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Tito",
	lastName: "Mundo",
	age: 22,
	location: "México",
};

const student2: Student = {
	firstName: "Ángel",
	lastName: "Valdivieso",
	age: 22,
	location: "México",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = document.createElement('tr');
const heading1 = document.createElement('th');
heading1.innerHTML = 'First Name';
const heading2 = document.createElement('th');
heading2.innerHTML = 'Location';

tableHeader.append(heading1, heading2);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const name = document.createElement('td');
	const location = document.createElement('td');

	name.innerHTML = student.firstName;
	location.innerHTML = student.location;
	row.append(name, location);
	table.appendChild(row);
});

document.body.appendChild(table);
