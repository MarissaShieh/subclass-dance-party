var makeSideDancer = function(top, left, timeBetweenSteps) {
    this.$node = $('<span class="sideDancer"></span>');
    makeDancer.call(this, top, left, timeBetweenSteps);
}

makeSideDancer.prototype = Object.create(makeDancer.prototype);
makeSideDancer.prototype.constructor = makeSideDancer;
makeSideDancer.prototype.oldStep = makeDancer.prototype.step; 



makeSideDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeIn();
}