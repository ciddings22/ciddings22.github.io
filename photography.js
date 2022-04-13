var b1 = document.getElementById("nap");
var b2 = document.getElementById("popcorn");
var b3 = document.getElementById("so cool");
var img1 = document.getElementById("emmitt");

function changeNap() {
	img1.src = "nap time.jpg"
}
function changeJack() {
	img1.src = "jack.jpg"
}
function changeCaleb() {
	img1.src = "wojak.jpg"
}

b1.addEventListener("click", changeNap);
b2.addEventListener("click", changeJack);
b3.addEventListener("click", changeCaleb);