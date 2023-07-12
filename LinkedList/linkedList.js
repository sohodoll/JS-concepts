const createLinkedList = () => {
  return {
    head: null,
    tail: null,
    append(value) {
      const newNode = createNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    },

    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    },
  };
};

const createNode = (value = null) => {
  return {
    value: value,
    next: null,
  };
};

const List = createLinkedList();
List.append(1);
List.append(2);
List.append(3);

List.display();
