Array.prototype.uniq = function() {
    let x = [];
    for (let i = 0; i < this.length; i++ ) {
        if (!x.includes(this[i])) {
            x.push(this[i]);
        }
    }
    return x;
}

