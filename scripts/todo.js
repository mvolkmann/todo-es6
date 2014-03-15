'use strict';
/*jshint esnext: true */

class Todo {
  // Traceur doesn't support static properties yet.
  // If it did then lastTs could be static.

  constructor(text, done = false) {
    this.text = text;
    this.done = done;

    var ts = Date.now(); // used as unique identifier
    // Adjust if this Todo was created in the
    // same millisecond as the previous one.
    this.timestamp = ts === Todo.lastTs ? ts + 1 : ts;
    Todo.lastTs = ts;
  }
}

// Having a "default" export is useful when
// there is one main thing a module exports.
export default Todo;
