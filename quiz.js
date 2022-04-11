var q1 = document.getElementById("qone");

function checkq1() {
	if (q1.value == 50){
		document.getElementById("q1output").innerHTML = "Correct";
	}
else {
	document.getElementById("q1output").innerHTML = "no";
	}
}
document.getElementById("checkq1").addEventListener("click", checkq1);
