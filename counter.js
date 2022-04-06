var count = 0;

function minus() {
	count = count - 1;
	document.getElementById("number").innerHTML = count;
	
	if (count == 69){
	document.getElementById("number").innerHTML = "Nice lmao";
}
}

function plus() {
	count = count + 1;
	document.getElementById("number").innerHTML = count;
	
	if (count == 69){
	document.getElementById("number").innerHTML = "Nice lmao";
}
}

function divide10() {
	count = count / 10;
	document.getElementById("number").innerHTML = count;
	
	if (count == 69){
	document.getElementById("number").innerHTML = "Nice lmao";
}
}

function minus5() {
	count = count - 5;
	document.getElementById("number").innerHTML = count;
	
	if (count == 69){
	document.getElementById("number").innerHTML = "Nice lmao";
}
}

function plus5() {
	count = count + 5;
	document.getElementById("number").innerHTML = count;
	
	if (count == 69){
	document.getElementById("number").innerHTML = "Nice lmao";
}
}

function multiply0() {
	count  = count * 0;
	document.getElementById("number").innerHTML = count;
}

function multiply13() {
	count  = count * 13;
	document.getElementById("number").innerHTML = count;
	
	if (count == 69){
	document.getElementById("number").innerHTML = "Nice lmao";
}
}

document.getElementById("minus").addEventListener("click", minus);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("divide10").addEventListener("click", divide10);
document.getElementById("minus5").addEventListener("click", minus5);
document.getElementById("plus5").addEventListener("click", plus5);
document.getElementById("multiply0").addEventListener("click", multiply0);
document.getElementById("multiply13").addEventListener("click", multiply13);