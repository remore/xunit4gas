var framework_experiment = function(){
  this.assertions = [];
};

framework_experiment.prototype.assertEquals = function(expected, actual, message){
  this.assertions.push({
    result: expected == actual,
    expected: expected,
    actual: actual,
    message: message
  });
};

framework_experiment.prototype._countResult = function( value ){
  var sum=0;
  var message="";
  for ( var i=0; i < this.assertions.length; i++ ) {
    if (this.assertions[i].result == value){
      sum++;
      message += this.assertions[i].message + ", ";
    }
  }
  return { sum: sum, message: message };
}
