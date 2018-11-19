
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let o = ["th", "st", "nd", "rd"];
	
	for(let i = 0; i <= color.length; i++){

		if(i == 1){
		console.log(i + o[i] + " choice is " + color[i - 1]);
	}

		else if(i == 2){
		console.log((i) + o[i] + " choice is " + color[i - 1]);
	}
	
		else if(i == 3){
		console.log((i) + o[i] + " choice is " + color[i - 1]);
	}
	
		else if((i == 4) || (i == 5) || (i == 6) || (i == 7)){
		console.log(i + o[0] + " choice is " + color[i - 1]);
	}

}