/ AIRCRAFT */
function Aircraft() {
  addMovementListener();
  addShootListener();
  this.draw = function() {
    var canvas=document.getElementById("aircraft");
    var c=canvas.getContext("2d");
    c.moveTo(0,60);
    c.lineTo(50,0); // line 1
    c.lineTo(100,60); // line 2
    c.lineWidth=10;
    c.lineJoin="round";
    c.strokeStyle= "#e325cc"; // line color
    c.stroke();	
  }

  this.shoot = function() {
    $('<div class="bullet" style="top:' + ($("#aircraft").position().top) + 'px;left:' + ($("#aircraft").position().left + 45) + 'px"></div>').appendTo("#space");
    $('.bullet').animate({
        top: '-10'
    }, 4000, function() { 
      $(this).remove();
    });
  }

  function addShootListener() {
    $(document).keydown(function(event) {
        if (event.keyCode == 32) {
          air.shoot();
        }
    });
  }

  function addMovementListener() {
    $(document).keypress(function(event) {
      switch(event.keyCode)
      {
          case 37: //left
            //this.moveLeft();
            $("#aircraft").animate({
              left: '-=10' 
            }, 10);
            break;
          case 38: //up
            $("#aircraft").animate({
              top: '-=10' 
            }, 10);
            break;
          case 39: //right
            $("#aircraft").animate({
              left: '+=10' 
            }, 10);
            break;
          case 40: //down
            $("#aircraft").animate({
              top: '+=10' 
            }, 10);
            break;
      }
    });
  }
}
/* AIRCRAFT */
