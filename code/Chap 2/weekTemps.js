function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add(temp) {
    this.dataStore.push(temp);
}
function average() {
    var total = 0;
    for (var i=0; i<this.dataStore.length; i++) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisweek = new weekTemps();
thisweek.add(50);
thisweek.add(40);
thisweek.add(60);
console.log(thisweek.average());