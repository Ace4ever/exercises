// function tree(height) {
// 	var pineTree = [];
// 	pineTree[height] = "*";

// 	for (var i = 0; i = pineTree.length; i++) {
// 		pineTree[i] = " ";
// 	} 

// 	for (var j = 0; j = height; j++) {
// 		pineTree[height + j] = "*";
// 		pineTree[height + j] = "*";

// 		var pineOutput = pineOutput.join("");

// 		console.log("pineOutput");
// 	}
// }

// tree (12);

var tree = function (height) {
	var i, j, output, lightArray = [];

	for (i = 0; i <= height*2; i++) {
		lightArray.push("*");
	}

	for (; output = lightArray.slice(), height > 0; height--) {
		for (j=0; j < height; j += 1) {
			output.splice(j, 1, " ");
			output.splice(output.length - j- 1, 1, " ");
		}
		
		console.log(output.join(''));
	}
};

tree(20);