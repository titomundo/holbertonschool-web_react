interface MajorCredits {
	credits: number;
	_brand: "MajorCredits";
}


interface MinorCredits {
	credits: number;
	_brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
	const summed: MajorCredits = {
		credits: subject1.credits + subject2.credits,
		_brand: "MajorCredits",
	}

	return summed;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
	const summed: MinorCredits = {
		credits: subject1.credits + subject2.credits,
		_brand: "MinorCredits",
	}

	return summed;
}

// test sum of two major subjects
const major1: MajorCredits = { credits: 8, _brand: "MajorCredits" };
const major2: MajorCredits = { credits: 12, _brand: "MajorCredits" };
console.log(sumMajorCredits(major1, major2));

// test sum of two minor subjects
const minor1: MinorCredits = { credits: 2, _brand: "MinorCredits"};
const minor2: MinorCredits = { credits: 4, _brand: "MinorCredits"};
console.log(sumMinorCredits(minor1, minor2));
