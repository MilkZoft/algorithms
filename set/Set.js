function Set() {
  let items = {};

  this.has = value => {
    // return value in items;
    return items.hasOwnProperty(value);
  };

  this.add = value => {
    if (!this.has(value)) {
      items[value] = value;

      return true;
    }

    return false;
  };

  this.delete = value => {
    if (this.has(value)) {
      delete items[value];

      return true;
    }

    return false;
  };

  this.clear = () => {
    items = {};
  };

  this.size = () => {
    return Object.keys(items).length;
  };

  this.values = () => {
    let values = [];
    let keys = Object.keys(items);

    for (let i = 0; i <= keys.length - 1; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  }

  this.union = otherSet => {
    let unionSet = new Set();

    let values = this.values();

    for (let i = 0; i <= values.length - 1; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();

    for (let i = 0; i <= values.length - 1; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };
}
