'use strict';
/*jshint esnext: true */
/*global angular: false */

// The next line doesn't work without the ./ in Traceur!
import TodoList from './todolist';
import Injectable from './injectable';

var app = angular.module('Todo', []);
var todoList = new TodoList();
todoList.add('learn AngularJS', true);
todoList.add('build an AngularJS app');


class TodoCtrl extends Injectable {

    constructor() {
        this.todoList = todoList;
    }

    addTodo() {
        this.todoList.add(this.todoText);
        this.todoText = ''; // clears input
    }
}

TodoCtrl.$inject = ['$scope'];

angular
    .module('Todo', [])
    .controller('TodoCtrl', TodoCtrl);
