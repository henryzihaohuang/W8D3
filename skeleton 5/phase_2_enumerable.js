

Array.prototype.myEach = function(callback) {

  for (let i = 0; i < this.length; i++ ) {
    callback(this[i]);
  }

}

Array.prototype.myMap = function(callback) {
  let newArray = [];

  this.myEach(x => newArray.push( (callback(x)) ) );

  console.log(newArray);
  return newArray;
}


