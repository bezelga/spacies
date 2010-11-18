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
