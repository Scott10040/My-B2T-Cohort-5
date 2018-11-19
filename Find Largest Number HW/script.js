



function largestNumber() {

	let numberOne = prompt("Please enter your first number");
	let numberTwo = prompt("Please enter your second number");
	let numberThree = prompt("Please enter your third number");

	if(numberOne > numberTwo && numberOne > numberThree) {

		console.log(numberOne + " is the largest number.");
	
	} else if(numberTwo > numberThree) {

		console.log(numberTwo + " is the largest number.");

	} else {

		console.log(numberThree + " is the largest number.");	

	}
	}

