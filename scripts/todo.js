/*jshint esnext: true */

var timestamp = 0;

class Todo {
  constructor(text, done = false, timestamp = Todo.timestamp()) {
    this.text = text;
    this.done = done;
    this.timestamp = timestamp;
  }

  static timestamp() {
    var now = Date.now();

    timestamp = now === timestamp ?
      timestamp + 1 : now;

    return timestamp;
  }
}

// Having a "default" export is useful when
// there is one main thing a module exports.
export default Todo;
