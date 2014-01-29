// AIRCRAFT
function Aircraft() {
  var velocity = 10,
      canvas;

  addKeyListener();

  this.draw = function() {
    canvas = document.getElementById("aircraft").getContext("2d");
    canvas.moveTo(0,60);
    canvas.lineTo(50,0); // line 1
    canvas.lineTo(100,60); // line 2
    canvas.lineWidth=10;
    canvas.lineJoin="round";
    canvas.strokeStyle= "#e325cc"; // line color
    canvas.stroke();
  }

  this.shoot = function() {
    var topPosition = $("#aircraft").position().top,
        leftPosition = $("#aircraft").position().left + 45;
    $('<div class="bullet" style="top:' + topPosition + 'px;left:' + leftPosition + 'px"></div>').appendTo("#space");
    $('.bullet').animate({
        top: -10
    }, 4000, function() {
      $(this).remove();
    });
  }

  function addKeyListener() {
    $(document).keydown(function(event) {
      console.log('here', event.keyCode);
      switch(event.keyCode)
      {
        case 32:
          air.shoot();
          break;
        case 37: //left
          //this.moveLeft();
          $("#aircraft").animate({
            left: '-=10'
          }, velocity);
          break;
        case 38: //up
          $("#aircraft").animate({
            top: '-=10'
          }, velocity);
          break;
        case 39: //right
          $("#aircraft").animate({
            left: '+=10'
          }, velocity);
          break;
        case 40: //down
          $("#aircraft").animate({
            top: '+=10'
          }, velocity);
          break;
      }
    });
  };
}
/* AIRCRAFT */
