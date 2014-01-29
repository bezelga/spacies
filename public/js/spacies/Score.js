function Score() {
  this.value = 0;
  this.update = function(add) {
    score.value += add;
    $("#score_val").text(this.value);
  }
}
