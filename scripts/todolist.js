'use strict';
/*jshint esnext: true */

import Todo from './todo';
import {values} from './generators';

class TodoList {
  constructor() {
    // If Traceur supported Maps, this could be a Map with integer keys.
    this.todos = {}; // map of Todo objects by timestamp
    this.length = 0;
  }

  add(text, done = false) {
    let todo = new Todo(text, done);
    this.todos[String(todo.timestamp)] = todo;
    this.length++;
  }

  archiveCompleted() {
    // Not saving completed todos in this version.
    for (let todo of values(this.todos)) {
      if (todo.done) this.delete(todo);
    }
  }

  delete(todo) {
    delete this.todos[String(todo.timestamp)];
    this.length--;
  }

  getUncompletedCount() {
    // Unlike this.length, this must be recalculated because
    // AngularJS changes the done property in the Todo objects.
    // If Traceur supported proxies, we could track
    // changes to the done properties.
    let count = 0;
    for (let todo of values(this.todos)) {
      if (!todo.done) count++;
    }
    return count;
  }
}

export default TodoList;
