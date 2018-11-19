let fruits = ["apple", "orange", "kiwi"];
//fruits.sort();



function addToFruits(){
	let fruitOne = prompt("Enter first fruit").toLowerCase();
	let fruitTwo = prompt("Enter second fruit").toLowerCase();
	fruits.push(fruitOne,fruitTwo);
	fruits.sort();
	//let newFruits = [fruitOne + (", ") + fruitTwo + ", "];
	//let combinedFruit = [newFruits + " " + fruits];
//}
	//document.getElementById("sortedFruit").innerHTML = combinedFruit.join(" with ");
	document.getElementById("combinedFruit").innerHTML = fruits.join(" with ");
		console.log(combinedFruit);
}
