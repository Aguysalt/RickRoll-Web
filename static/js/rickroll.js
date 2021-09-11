function play() {
    document.getElementById("rickroll").play(); 
    document.getElementById("clickme").style.visibility = "hidden";
	document.getElementById("link").style.visibility = "hidden";
    document.getElementById("rickroll").style.visibility = "visible";
	document.getElementById("body").style.backgroundColor = "black";
	document.title = "RickRolling~";
}

document.body.onload = function(){
	document.getElementById("rickroll").style.visibility = "hidden";
    document.getElementById("clickme").style.visibility = "visible";
	document.getElementById("link").style.visibility = "visible";
    document.getElementById("body").style.visibility = "visible";
}