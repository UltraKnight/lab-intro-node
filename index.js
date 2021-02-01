class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if(this.items[pos] !== undefined) {
      return this.items[pos];
    }

      throw new Error('OutOfBounds');
  }

  max() {
    if(this.items.length) {
      return Math.max.apply(null, this.items);
    }
    throw new Error('EmptySortedList');
  }

  min() {
    if(this.items.length) {
      return Math.min.apply(null, this.items);
    }
    throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.reduce((acumulator, currValue) => acumulator += currValue, 0);
  }

  avg() {
    if(this.items.length) {
      return this.sum() / this.items.length;
    }
    throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;