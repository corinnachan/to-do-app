// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false },
    { id: -1, description: 'third todo', done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener


    // add span holding description
  var descriptNode = document.createElement('span');
  descriptNode.textContent = todo.description;
  todoNode.appendChild(descriptNode);


    // add markTodo button + highlight if done + click action
    var markButtonNode = document.createElement('button');
    markButtonNode.textContent = '✔';
    markButtonNode.setAttribute('class','mark');

    if(todo.done) {
      markButtonNode.classList.add('checked-off');
      todoNode.classList.add('checked-off');
    }

    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markButtonNode);


    // this adds the delete button + click action
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = '✗';
    deleteButtonNode.setAttribute('class','delete');

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      var description = event.target.getElementsByTagName('input')[0].value; // event.target ....

      // hint: todoFunctions.addTodo add item to Todo list
      var newTodo = todoFunctions.addTodo(state, description);
      var newState = [...newTodo];
      update(newState);
      // reset form
      addTodoForm.reset();
    });
  }

  //sort button action
  var sortButtonNode = document.getElementById('sort-container').childNodes[1];

  sortButtonNode.addEventListener('click', function(event) {
    var newState = todoFunctions.sortTodos(state);
    update(newState);
  })

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
