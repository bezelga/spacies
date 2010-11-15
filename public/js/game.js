var x;
var y;
$(document).ready(function() {
  drawAircraft();
  //drawCurveNave();
  x= 300;
  y = 300;
  window.addEventListener("keydown", getKey, false);
});

function drawAircraft() {
  var canvas=document.getElementById("aircraft");
	var c=canvas.getContext("2d");
 
	c.moveTo(0,60);
	c.lineTo(50,0); // line 1
	c.lineTo(100,60); // line 2
 
	c.lineWidth=10;
	c.lineJoin="round";
  c.strokeStyle = "green";
	c.stroke();	
}

function drawCurveNave() {
  var canvas=document.getElementById("aircraft");
	var c=canvas.getContext("2d");
  c.moveTo(0,60);
	c.quadraticCurveTo(50, 0, 100, 60);
	c.lineWidth=10;
	c.strokeStyle="pink"; // line color
	c.stroke();	
}

function moveRight() {
  $("#aircraft").animate({
    left: '+=10' 
  }, 10);
}

function moveLeft() {
  $("#aircraft").animate({
    left: '-=10' 
  }, 10);
}

function shoot() {
  //$('<div class="bullet" style="left:' + ("#aircraft").position().left + '"></div>').appendTo("#aircraft");
  $('<div class="bullet" style="top:480px;left:' + ($("#aircraft").position().left + 45) + 'px"></div>').appendTo("#space");
  $('.bullet').animate({
      top: '0'
  }, 2000);
}

function getKey() {
    if (event == null) {
        keyCode = window.event.keyCode;
        window.event.preventDefault();
    }
    else {
        keyCode = event.keyCode;
        event.preventDefault();
    }

    switch(keyCode)
    {
        case 32: //space bar
          //alert($("#aircraft").position().left);
          //alert($("#aircraft").position().top);
          shoot();
          break;
        case 37: //left
          moveLeft();
          break;
        case 38: //up
          //y -= 3;
          break;
        case 39: //right
          moveRight();
          break;
        case 40: //down
            //y += 3;
            break;
    }
}

