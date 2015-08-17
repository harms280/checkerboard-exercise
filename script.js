// Your JS goes here
window.onload = function() {
	createBoard();
};

document.body.style.height = "1000px";
var body = document.querySelector("body");

var filter = document.createElement("div");
filter.style.width = "100%";
filter.style.height = "1010px";
filter.style.float = "left";
filter.style.zIndex = "10";
filter.style.position = "absolute";
filter.style.top = "0";
filter.style.left = "0";
filter.style.background = "-webkit-linear-gradient(top, rgba(147,206,222,1) 0%, rgba(117,189,209,0.91) 41%, rgba(73,165,191,0.78) 100%)";

body.appendChild(filter);



var select = document.getElementsByTagName("div");





function createBoard() {
	for(var y = 1; y < 10 ; y++) {
		for (var x = 0; x < 9; x++) {
			var tile = document.createElement("div");
			tile.style.width = "11.1%";
			tile.style.float = "left";
			tile.style.height = "11.1%";
			if(y % 2 === 0) {
				if(x % 2 === 0) {
					tile.style.background = "red";
				} else {
					tile.style.background = "black";
				}
			} else {
				if(x % 2 === 0) {
					tile.style.background = "black";
				} else {
					tile.style.background = "red";
				}
			}
			body.appendChild(tile);
		}
	}
}