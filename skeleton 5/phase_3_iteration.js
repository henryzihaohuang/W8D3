Array.prototype.bubblesort = function() {
let sorted = false;
while (!sorted){
    sorted = true;
    for(let i = 0; i < this.length-1; i++) {
        // debugger;
        if (this[i] > this[i+1]) {
            this[i], this[i + 1] = this[i + 1], this[i];
            sorted = false;
        }
    }
}
    return this;
}