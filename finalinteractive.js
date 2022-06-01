var count = 0;
var img = document.getElementById("GVHalbumcover");
var info = document.getElementById("releaseinfo");
function plus() {
	count = count + 1;
	if (count == 0) {
		img.src = "Greta_Van_Fleet_Highway_Tune.jpg";
		info.innerHTML = "Highway Tune was their debut single and was released on March 31, 2017. It was available in the U.S. and Canada and topped the charts in the U.S. It was the very first song the band had ever written and recorded together, with the guitar riff being written as far back as 2010, before the band had even formed, and was later reformatted and demoed twice after the band had been formed.";
	}
	if (count == 1) {
		img.src = "Black Smoke Rising.jpg";
		info.innerHTML = "Black Smoke Rising was their debut EP and was only released in the U.S. on April 21, 2017. It peaked at 182 on the Billboard Top 200 chart on November 11, 2017.";
	}
	if (count == 2) {
		img.src = "stockGVF.jpg";
		info.innerHTML = "Safari Song was their second single and was released in October 2017. It later topped the Billboard Mainstream Rock Songs chart in February 2018. The song's sound has drawn comparisons to the work of Led Zeppelin, both in the song's production sounding similar to rock music from the 1960s, and Josh Kiszka's vocals mirroring Robert Plant's signature wail, phrasing, and articulation. The single did not come with its own album cover art so here is an image of the band members.";
	}
	if (count == 3) {
		img.src = "Anthem of the Peaceful Army.jpg";
		info.innerHTML = "Anthem of the Peaceful Army was the first studio album released by the band. It was released on October 19, 2018. It debuted at number three on the Billboard 200. It was recorded in a cabin that the band members believed to be haunted.";
	}
	if (count == 4) {
		img.src = "Battle at Garden's Gate.jpg";
		info.innerHTML = "The Battle at Garden's Gate was Greta Van Fleet's "
	}
}
function minus() {
	count = count - 1;
	if (count == 0) {
		img.src = "Greta_Van_Fleet_Highway_Tune.jpg"
		info.innerHTML = "Highway Tune was their debut single and was released on March 31, 2017. It was available in the U.S. and Canada and topped the charts in the U.S. It was the very first song the band had ever written and recorded together, with the guitar riff being written as far back as 2010, before the band had even formed, and was later reformatted and demoed twice after the band had been formed."
	}
	if (count == 1) {
		img.src = "Black Smoke Rising.jpg"
		info.innerHTML = "Black Smoke Rising was their debut EP and was only released in the U.S. on April 21, 2017. It peaked at 182 on the Billboard Top 200 chart on November 11, 2017."
	}
}






document.getElementById("Next").addEventListener("click", plus);
document.getElementById("Back").addEventListener("click", minus);