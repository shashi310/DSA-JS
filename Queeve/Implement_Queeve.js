class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  
    print() {
      console.log(this.queue);
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  queue.print(); // Output: [10, 20, 30]
  
  console.log(queue.dequeue()); // Output: 10
  
  console.log(queue.front()); // Output: 20
  
  console.log(queue.isEmpty()); // Output: false
  
  console.log(queue.size()); // Output: 2
  



//   In this code, we define a Queue class that represents a queue data structure. The queue property is an array that holds the elements of the queue.

// The class provides several methods:

// enqueue(item): Adds an element to the back of the queue.
// dequeue(): Removes and returns the element at the front of the queue.
// front(): Returns the element at the front of the queue without removing it.
// isEmpty(): Checks if the queue is empty.
// size(): Returns the number of elements in the queue.
// print(): Displays the elements of the queue.
// You can create an instance of the Queue class and use the provided methods to enqueue, dequeue, access the front element, check the size, and print the queue. Modify the code according to your specific needs for implementing a queue data structure.