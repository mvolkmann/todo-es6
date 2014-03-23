'use strict';
/*jshint esnext: true */

// This module defines several useful generators,
// not all of which are used in the Todo app.

// A generator for iterating over the key/value pairs in an object.
export function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

// A generator for iterating over the keys in an object.
export function* keys(obj) {
  for (let key of Object.keys(obj)) {
    yield key;
  }
}

// A generator that yields the first n values of an iterator.
function* take(iterator, n) {
  while (n > 0) {
    yield iterator.next();
    n--;
  }
}

// A generator for iterating over the values in an object.
export function* values(obj) {
  for (let key of Object.keys(obj)) {
    yield obj[key];
  }
}
