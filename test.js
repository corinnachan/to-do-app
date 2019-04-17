var test = require('tape');
var logic = require('./logic.js');


test('Example test', function(t) {
  t.pass();
  t.end();
});

test('Clone array of objects', function(t){
  var actual = logic.cloneArrayOfObjects([{}]);
  var expected = [{}];
  t.deepEquals(actual, expected, 'Clone array should be the same as original array');
  t.end();
})

test('Add todo item', function(t){
  var actual = logic.addTodo([],'task1');
  var expected = [{id: 1, description: 'task1', done: false}];
  t.deepEquals(actual, expected, 'task1 should be added to todo array');
  t.end();
})

test('Delete todo item', function(t){
  var actual = logic.deleteTodo([],'1');
  var expected = [];
  t.deepEquals(actual,expected, 'ID 1 entry should be deleted');
  t.end();
})

test('Mark todo item as done - false to true', function(t){
  var actual = logic.markTodo([{id: 1, description: 'task1', done: false}], 1);
  var expected = [{id: 1, description: 'task1', done: true}];
  t.deepEquals(actual, expected, 'task id 1 marked as done');
  t.end();
})

test('Mark todo item as done - true to false', function(t){
  var actual = logic.markTodo([{id: 1, description: 'task1', done: true}], 1);
  var expected = [{id: 1, description: 'task1', done: false}];
  t.deepEquals(actual, expected, 'task id 1 marked as done');
  t.end();
})

test('Sort todo items', function(t){
  var actual = logic.sortTodos([{id:1 }, {id: 2}, {id: 3}]);
  var expected = ([{id: 3}, {id: 2}, {id: 1}]);
  t.deepEquals(actual, expected, 'Reverse to do ID');
  t.end();
})
