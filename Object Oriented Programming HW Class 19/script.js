
let library = [

  {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },

  {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },

  {author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }

];



for(let i = 0; i < library.length; i++) {

	if(library[i].readingStatus) {
		document.getElementById("bookInfo").innerHTML += `You already read ${library[i].title} by ${library[i].author}<br><br>`;
	
	}else{
		document.getElementById("bookInfo").innerHTML += `You still need to read ${library[i].title} by ${library[i].author}<br><br>`;
	}
} 




