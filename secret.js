function submit() {
	if (document.getElementById("password").value == "bruh") {
	document.getElementById("output").innerHTML =  "ACCESS GRANTED";
	}
	else {
		document.getElementById("output").innerHTML =  "The password " + document.getElementById("password").value + " was the wrong password";
		document.getElementById
	}
}

document.getElementById("submit").addEventListener("click", submit);