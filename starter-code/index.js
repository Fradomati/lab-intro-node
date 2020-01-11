class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length - 1) throw new Error("EmptySortedList");
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items.pop();
  }

  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items.shift();
  }

  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce(function(acc, b) {
      return acc + b;
    });
  }

  avg() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
