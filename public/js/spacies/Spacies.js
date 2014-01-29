/* GLOBAL VARS */
var invaders = 1;
var id = 0;
var air = new Aircraft();
var space = new Space();
var score = new Score();
/* GLOBAL VARS */

/* MAIN */
$(document).ready(function() {
  air.draw();
  setInterval(function(){space.detect();},10);
  space.createInvaders(2);
  setInterval(function(){space.cleanBullets();} ,10000);
});
/* MAIN */








