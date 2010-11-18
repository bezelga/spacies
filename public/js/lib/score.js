function Score() {
  this.score = 0;
  this.update = function(value) {
    score += value;
    $("#score_val").text(score);
  }
}
