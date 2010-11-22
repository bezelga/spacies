describe("Aircraft", function() {
  var air;

  beforeEach(function() {
    air = new Aircraft();
  });

  it("should draw itself with html5 canvas", function() {
    //air.draw();
  });

  it("should shoot", function() {
    //air.shoot();
    expect($(".bullet")).toExist();
  });

});
