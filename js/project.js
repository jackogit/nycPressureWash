var footLength;
var footWidth;
var calculateSquareHorFootage;

function calculateSquareHorFootage() {
	document.body.backgroundColor = "blue";
	footLength = document.getElementById("footLength").value;
	footWidth = document.getElementById("footWidth").value;
	var calculateSquareHorFootage = footWidth * footLength;
	document.getElementById("sqFootage").innerHTML = calculateSquareHorFootage;
}
document.getElementById("clickme").onclick = calculateSquareHorFootage;