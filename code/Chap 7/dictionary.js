function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove() {
    delete this.datastore[key];
}
function showAll() {
    
    for (key in Object.keys(this.datastore)) {
        // console.log(key + '->' + this.datastore[key]);
        console.log(key);
    }
    // console.log(Object.keys(this.datastore));
}

//测试
var pbook = new Dictionary();
pbook.add('mike','123');
pbook.add('david','345');
pbook.add('cyn','456');
pbook.showAll();