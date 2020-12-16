Array.prototype.uniq = function() {
    let x = [];
    for (let i = 0; i < this.length; i++ ) {
        if (!x.includes(this[i])) {
            x.push(this[i]);
        }
    }
    return x;
}

// why does i2 (j) work?

Array.prototype.twoSum = function() {
    let x = []
    for (let i = 0; i < this.length; i++ ) {
        for (let i2 = 0 ; i2 < this.length; i2++) {
            if ((i2 > i) && (this[i] + this[i2] === 0)) {
                x.push([i,i2]);
            }
        }
    }
    console.log(x);
}

Array.prototype.transpose = function() {
    let newArray = Array(3).fill(0).map(x => Array(3));

    for (let i = 0; i <this.length; i++ ) {
        for (let j = 0; j < this.length; j++ ) {
            newArray[i].push(this[j][i]) ;
        }
    }
    console.log(newArray);
}
