function Space() {
  function cleanInvadersBullets() {
    $('.invaderBullet').fadeOut("slow");
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
}
