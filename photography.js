var b1 = document.getElementById("nap");
var b2 = document.getElementById("popcorn");
var b3 = document.getElementById("so cool");
var b4 = document.getElementById("marty robbins");
var b5 = document.getElementById("greta");
var b6 = document.getElementById("queens");
var b7 = document.getElementById("red");
var b8 = document.getElementById("foo");
var b9 = document.getElementById("sly");
var b10 = document.getElementById("nick");
var img1 = document.getElementById("emmitt");

function changeNap() {
	img1.src = "nap time.jpg";
}
function changeJack() {
	img1.src = "jack.jpg";
}
function changeCaleb() {
	img1.src = "wojak.jpg";
}
function changeMarty() {
	img1.src = "Marty Robbins.jpg";
}
function changeGreta() {
	img1.src = "Greta Van Fleet.jpg";
}
function changeQueens() {
	img1.src = "Queens Of The Stone Age.jpg";
}
function changeRed() {
	img1.src = "Red Hot Chili Peppers.jpg";
}
function changeFoo() {
	img1.src = "Foo Fighters.jpg";
}
function changeSly() {
	img1.src = "Slydigs.jpg";
}
function changeNick() {
	img1.src = "Nickelback.jpg";
}
b1.addEventListener("click", changeNap);
b2.addEventListener("click", changeJack);
b3.addEventListener("click", changeCaleb);
b4.addEventListener("click", changeMarty);
b5.addEventListener("click", changeGreta);
b6.addEventListener("click", changeQueens);
b7.addEventListener("click", changeRed);
b8.addEventListener("click", changeFoo);
b9.addEventListener("click", changeSly);
b10.addEventListener("click", changeNick);