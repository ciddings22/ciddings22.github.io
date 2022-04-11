function submit() {
	if (document.getElementById("password").value == "bruh") {
	document.getElementById("output").innerHTML =  "ACCESS GRANTED";
	}
	else {
		document.getElementById("output").innerHTML =  "PLEASE ENTER CORRECT PASSWORD";
	}
}

document.getElementById("submit").addEventListener("click", submit);