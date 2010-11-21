function Space() {
  this.cleanBullets = function() {
    $('.invaderBullet').fadeOut("slow");
  }

  this.createInvaders = function(size) {
    for (i=0;i<=size;i++) {
      id += 1;
      var inv = new Invader(id,Math.random()*1000,Math.random()*200);
      inv.fall();
    }
  }

  this.observe = function() {
    if ($('.invader').length == 0) {
      invaders = invaders * 2;
      space.createInvaders(invaders);
    }
  }

  this.detect = function() {
    $('.bullet').collidesWith('.invader').each(function() {
      var inv = $(this);
      $(inv).collidesWith('.bullet').each(function() {
        inv.remove();
        $(this).remove();
      });
      score.update(10);
      space.observe();
    });

    $('.bullet').collidesWith('.invaderBullet').each(function() {
        var invbul = $(this);
        $(invbul).collidesWith('.bullet').each(function() {
          invbul.remove();
          $(this).remove();
        });
        score.update(20);
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
