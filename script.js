// Your JS goes here
window.onload = function() {
	createColorBoard();
	changeColor();
};

document.body.style.height = "1000px";
var body = document.querySelector("body");

var select = document.getElementsByTagName("div");

// function createBoard() {
// 	for(var y = 1; y < 10 ; y++) {
// 		for (var x = 0; x < 9; x++) {
// 			var tile = document.createElement("div");
// 			tile.style.width = "11.1%";
// 			tile.style.float = "left";
// 			tile.style.height = "11.1%";
// 			if(y % 2 === 0) {
// 				if(x % 2 === 0) {
// 					tile.style.background = "red";
// 				} else {
// 					tile.style.background = "black";
// 				}
// 			} else {
// 				if(x % 2 === 0) {
// 					tile.style.background = "black";
// 				} else {
// 					tile.style.background = "red";
// 				}
// 			}
// 			body.appendChild(tile);
// 		}
// 	}
// }

var changeColor = setInterval(generateColors,1000);

function createColorBoard () {
	for(var y = 1; y < 10 ; y++) {
		for (var x = 0; x < 9; x++) {
			var tile = document.createElement("div");
			tile.style.width = "11.1%";
			tile.style.float = "left";
			tile.style.height = "11.1%";
			tile.style.backgroundColor = "rgb("+Math.floor((Math.random()*255))+","+Math.floor((Math.random()*255))+","+Math.floor((Math.random()*255))+")";
			body.appendChild(tile);
		}
	}
}

function generateColors() {
	for(var i = 0; i < select.length; i++) {
	 select[i].style.backgroundColor = "rgb("+Math.floor((Math.random()*255))+","+Math.floor((Math.random()*255))+","+Math.floor((Math.random()*255))+")";
	}
}