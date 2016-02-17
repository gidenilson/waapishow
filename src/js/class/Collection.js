app.Collection = function () {
    this.itens = [];

};
app.Collection.prototype.get = function (id) {
    var i, max, item;
    for (i = 0, max = this.itens.length; i < max; i += 1) {
        item = this.itens[i];
        if (item.id === id) {
            return item;
        }
    }
    return undefined;
};
app.Collection.prototype.add = function (item) {
    this.itens.push(item);
};

