

function changeToggleButton() {

	let toggleButton = document.getElementById("toggleButton");
	
	if(toggleButton.value === "ON") {
		toggleButton.value = "OFF"; 

		} else {
			toggleButton.value = "ON"; 
	}
}

		document.getElementById("toggleButton").addEventListener("click", changeToggleButton);

function makeBoxGreen(){
	
	if(toggleButton.value === "ON"){
		document.getElementById("myBox").style.backgroundColor = "green";
	}	
}

		document.getElementById("myBox").addEventListener("mouseover", makeBoxGreen);

function makeBoxRed(){
	
	if(toggleButton.value === "ON"){
		document.getElementById("myBox").style.backgroundColor = "red";
	}	
}

		document.getElementById("myBox").addEventListener("mouseleave", makeBoxRed);