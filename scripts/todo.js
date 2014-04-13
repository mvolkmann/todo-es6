/*jshint esnext: true */

var lastTs = 0;

class Todo {
  constructor(text, done = false, timestamp = Todo.timestamp()) {
    this.text = text;
    this.done = done;
    this.timestamp = timestamp;
  }

  static timestamp() {
    var now = Date.now();
    // Adjust if now is the same millisecond as lastTs.
    lastTs = now === lastTs ? lastTs + 1 : now;
    return lastTs;
  }
}

// Having a "default" export is useful when
// there is one main thing a module exports.
export default Todo;
