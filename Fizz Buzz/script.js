
for (let i = 1; i < 101; i++){
	//let i = 1 is the number to start the array with
	// i++ says run the loop over and over adding 1 each time until i is NOT less than 101 
	if(i % 15 == 0)
		//if i is divisible by 15 with no remainder (% modulo) display FizzBuzz in the console
		console.log("FizzBuzz");
	else if (i % 3 == 0)
		//if i does not go into 15 evenly, divide i by 3; if i is divisible by 3 with no remainder (% modulo) display Fizz in the console
		console.log("Fizz");                                 
	else if (i % 5 == 0)
		//if i does not go into 15 or 3 evenly, divide i by 5; if i is divisible by 5 with no remainder (% modulo) display Buzz in the console
		console.log("Buzz");
	else console.log(i);
		//if i does not go into 15, 3, or 5 evenly, display in the console




}