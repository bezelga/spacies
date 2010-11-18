/* INVADER */
function Invader(id,left,top) {
  this.left = left;
  this.top = top;
  this.id = id;

  this.draw = function(left,top) {
    $("<div id='"+ this.id +"' class='invader' style='left:" + left +"px;top:" + top + "'></div>").appendTo("#space");
  }

  this.shoot = function() {
    $('<div class="invaderBullet" style="top:' + this.top + 'px;left:' + this.left + 'px"></div>').appendTo("#space");
    $('.invaderBullet').animate({
        top: '650px'
    }, 5000);
  }


  this.fall = function () {
    $("#" + this.id).animate({
        top: '650px' 
    }, 10000);
  }

  //this.move = function() {
      //this.animate({
        //left: '+=10' 
      //}, 50);
  //}

  this.draw(left,top);
}
/* INVADER */

/* AIRCRAFT */
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
            moveLeft();
            break;
          case 38: //up
            $("#aircraft").animate({
              top: '-=10' 
            }, 10);
            break;
          case 39: //right
            moveRight();
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

/* GLOBAL VARS */
var score = 0;
var invaders = 1;
var id = 0;
var air = new Aircraft();
/* GLOBAL VARS */

/* MAIN */
$(document).ready(function() {
  air.draw();
  setInterval("detect();",10);

  for (i=0;i<=invaders;i++) {
    id += 1;
    var inv = new Invader(id,Math.random()*1000,Math.random()*200);
    //inv.shoot();
    inv.fall();
  }
  setInterval("cleanInvadersBullets();",10000);
});
/* MAIN */


/* ANONYMOUS METHODS */
function cleanInvadersBullets() {
  $('.invaderBullet').fadeOut("slow");
}

function invadersClean() {
  $('#invaders').fadeOut("slow");
  clearInterval(invaders);
}

function updateScore(value) {
  score += value;
  $("#score_val").text(score);
}

function observeDone() {
  if ($('.invader').length == 0) {
    invaders = invaders * 2;
    for (i=0;i<=invaders;i++) {
      id += 1;
      var inv = new Invader(id,Math.random()*1000,Math.random()*200);
      inv.fall();
    }
  }
}

function detect() {
  $('.bullet').collidesWith('.invader').each(function() {
    var inv = $(this);
    $(inv).collidesWith('.bullet').each(function() {
      inv.remove();
      $(this).remove();
    });
    updateScore(10);
    observeDone();
  });

  $('.bullet').collidesWith('.invaderBullet').each(function() {
      var invbul = $(this);
      $(invbul).collidesWith('.bullet').each(function() {
        invbul.remove();
        $(this).remove();
      });
      updateScore(20);
  });

  $('.invaderBullet').collidesWith('#aircraft').each(function(inv) {
      var air = $(this);
      air.remove();
      alert("game over!");
      window.location = "/";
  });
  $('.invader').collidesWith('#aircraft').each(function() {
      var air = $(this);
      air.remove();
      alert("game over!");
      window.location = "/";
  });
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



