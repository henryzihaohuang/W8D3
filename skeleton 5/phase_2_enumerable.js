

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


Array.prototype.myReduce = function(callback, initialValue) {
  let newArray = this

  if (initialValue === undefined) {
    initialValue = this[0];
    newArray = this.slice(1, this.length) ;
  }
  let acc = initialValue;

  newArray.myEach(el => acc = (callback(acc, el)) ); 
  return acc;
}

// Array.each do |ele|
//   acc = Proc.call(acc, ele)
//   return acc
// end

