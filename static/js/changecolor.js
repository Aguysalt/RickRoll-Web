var rickroll = document.getElementById("rickroll");

function color_change () {
  var number_one = Math.floor( Math.random() * 255);
  var number_two = Math.floor( Math.random() * 255);
  var number_three = Math.floor( Math.random() * 255);
  rickroll.style.backgroundColor =  `rgb(${number_one}, ${number_two}, ${number_three})`
}

var auto_color = setInterval(color_change, 531);
