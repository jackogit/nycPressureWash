function calculateSquareHorFootage() {
	var footLength = document.getElementById("footLength").value;
	var footWidth = document.getElementById("footWidth").value;
	var calculateSquareHorFootage = footWidth * footLength;
	document.getElementById("sqFootage").innerHTML = calculateSquareHorFootage;
}

document.getElementById("clickme").onclick = calculateSquareHorFootage;
