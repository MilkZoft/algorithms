function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

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
    // Rango valido
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) { // Último elemento
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
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

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) { // Último elemento
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;

      return current.element;
    }

    return null;
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
