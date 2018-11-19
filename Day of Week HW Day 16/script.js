
let date = new Date().getDay();

let message = "Today's date is ";
let dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayNumber = [0,1,2,3,4,5,6];
	
	
	
	for (let i = 0; i < dayWeek.length; i++) {
		switch(date){

		case i:
			console.log(message + dayWeek[i]);
			document.getElementById("day").innerHTML = message + dayWeek[i];
			break;
		default: 
			console.log("It isn't " + dayWeek[i]);
			//continue;
		}
	}
		
	
