var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var currentScore,
	highestScore = 0;
	lowestScore = 101;

var gradeA = []; 
var gradeB = []; 
var gradeC = []; 
var gradeD = []; 
var gradeF = []; 



for (var i =  0; i < scores.length; i++) {
	currentScore = scores[i];

	if (currentScore > highestScore) {
		highestScore = currentScore;
	}
	if (currentScore < lowestScore) {
		lowestScore = currentScore;
	}
}


switch (true) {
	case (currentScore < 61):
		gradeF.push(currentScore);
		break;
	case (currentScore > 60 && currentScore < 71):
		gradeD.push(currentScore);
		break;
	case (currentScore > 70 && currentScore < 81):
		gradeC.push(currentScore);
		break;
	case (currentScore > 80 && currentScore < 91):
		gradeB.push(currentScore);
		break;
	case (currentScore > 90 && currentScore < 101):
		gradeA.push(currentScore);
		break;
}

console.log("gradeA", gradeA)
console.log("gradeB", gradeB)
console.log("gradeC", gradeC)
console.log("gradeD", gradeD)
console.log("gradeF", gradeF)
<<<<<<< HEAD
currentScore.innerHTML
=======
currentScore.innerHTM
>>>>>>> master

