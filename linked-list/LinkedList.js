function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.getHead = () => {
    return head;
  };

  this.append = element => {
    let node = new Node(element);
    let current;

    // Primer elemento en la lista
    if (head === null) {
      head = node;
    } else {
      current = head;

      // Hasta que next sea null (último elemento en la lista)
      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  };

  this.insert = (position, element) => {
    // Validango el rango
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      // Primera posicion
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      length++;

      return true;
    }

    return false;
  };

  this.removeAt = position => {
    if (position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      // Quitando el primer elemento
      if (position === 0) {
        head = current.next;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.remove = element => {
    let index = this.indexOf(element);
    console.log('INDEX', index);

    return this.removeAt(index);
  };

  this.indexOf = element => {
    let current = head;
    let index = 0;

    while(current) {
      if (element === current.element) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = () => {
    return length === 0;
  };

  this.size = () => {
    return length;
  };

  this.toString = () => {
    let current = head;
    let string = '';

    while(current) {
      string += current.element + (current.next ? 'n' : 'x');
      current = current.next;
    }

    return string;
  };
}
