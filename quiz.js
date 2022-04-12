var q1 = document.getElementById("qone");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var score = 0;

function check() {
	score = 0;
	if (q1.value == 50){
		document.getElementById("q1output").innerHTML = "Correct";
		score = score + 1;
	}
	else {
		document.getElementById("q1output").innerHTML = "no";
	}
	if (q2.value == "Team Fortress 2") {
		document.getElementById("q2output").innerHTML = "Correct";
		score = score + 1;
	}
	else {
		document.getElementById("q2output").innerHTML = "no";
	}
	if (q3.value == "Billy Joel") {
		document.getElementById("q3output").innerHTML = "Correct";
		score = score + 1;
	}
	else {
		document.getElementById("q3output").innerHTML = "idiot";
	}
	document.getElementById("score").innerHTML = score + " out of 3";
}
document.getElementById("check").addEventListener("click", check);
