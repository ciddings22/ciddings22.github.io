var count = 0;

function minus() {
	count = count - 1;
	document.getElementById("number").innerHTML = count;
}

function plus() {
	count = count + 1;
	document.getElementById("number").innerHTML = count;
}

document.getElementById("minus").addEventListener("click", minus);
document.getElementById("plus").addEventListener("click", plus);