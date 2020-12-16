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
        for (let j = 0 ; j < this.length; j++) {
            if ((j > i) && (this[i] + this[j] === 0)) {
                x.push(this[i]);
                x.push(this[j]);
            }
        }
    }
    console.log(x);
}

