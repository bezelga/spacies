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



