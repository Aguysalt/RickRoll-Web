function play() {
    document.getElementById("rickroll").play(); 
    document.getElementById("clickme").style.visibility = "hidden";
	document.getElementById("link").style.visibility = "hidden";
    document.getElementById("rickroll").style.visibility = "visible";
	document.getElementById("body").style.backgroundColor = "black";
	document.title = "RickRolling~";
	document.getElementById("a").href = "https://github.com/azhuge233/RickRoll-Web";
	document.getElementById("svg").style.fill = '#FD6C6C';
	document.getElementById("svg").style.color = '#70B7FD';
}

document.body.onload = function(){
	document.getElementById("rickroll").style.visibility = "hidden";
    document.getElementById("clickme").style.visibility = "visible";
	document.getElementById("link").style.visibility = "visible";
    document.getElementById("body").style.visibility = "visible";
}