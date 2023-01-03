function  kandian() {
	document.getElementById("kandian").style.zIndex=2;
	document.getElementById("baoming").style.display="none";
	document.getElementById("kandian").style.display="block";
}
function baoming(){
	document.getElementById("kandian").style.zIndex=1;
	document.getElementById("baoming").style.display="block";
	document.getElementById("kandian").style.display="none";
}