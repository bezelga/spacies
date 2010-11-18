/* GLOBAL VARS */
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








