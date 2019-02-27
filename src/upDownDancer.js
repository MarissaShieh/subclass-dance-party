var upDownDancer = function(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer3"></span>');
    makeDancer.call(this, top, left, timeBetweenSteps);
};

upDownDancer.prototype = Object.create(makeDancer.prototype);
upDownDancer.prototype.constructor = upDownDancer;
upDownDancer.prototype.oldStep = makeDancer.prototype.step;

upDownDancer.prototype.step = function(){
    this.oldStep();
    this.$node.show();
};