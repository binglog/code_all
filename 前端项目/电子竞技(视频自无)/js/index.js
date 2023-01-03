function  on1() {
	document.getElementById("zh").style.color="#4ab5d5";
	document.getElementById("zh").style.textDecoration="underline";
	document.getElementById("gg").style.textDecoration="double";
	document.getElementById("ss").style.textDecoration="double";
	document.getElementById("gg").style.color="";
	document.getElementById("ss").style.color="";
	document.getElementById("on1").style.display="block";
	document.getElementById("on2").style.display="none";
	document.getElementById("on3").style.display="none";
}
function  on2() {
	document.getElementById("gg").style.color="#4ab5d5";
	document.getElementById("gg").style.textDecoration="underline";
	document.getElementById("ss").style.textDecoration="double";
	document.getElementById("zh").style.textDecoration="double";
	document.getElementById("zh").style.color="#000";
	document.getElementById("ss").style.color="";
	document.getElementById("on1").style.display="none";
	document.getElementById("on2").style.display="block";
	document.getElementById("on3").style.display="none";
}
function  on3() {
	document.getElementById("ss").style.color="#4ab5d5";
	document.getElementById("ss").style.textDecoration="underline";
	document.getElementById("gg").style.textDecoration="double";
	document.getElementById("zh").style.textDecoration="double";
	document.getElementById("gg").style.color="";
	document.getElementById("zh").style.color="#000";
	document.getElementById("on1").style.display="none";
	document.getElementById("on2").style.display="none";
	document.getElementById("on3").style.display="block";
}