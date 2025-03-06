const todoList = [];


renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    todoObject = todoList[i];
    const { name, date } = todoObject;

    todoListHTML += `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-btn" onClick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
  }
  
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
};

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const dateInputElement = document.querySelector('.js-date-input');

  const name = inputElement.value;

  const date = dateInputElement.value;
  // console.log(date);
  // console.log(name);

  todoList.push({name: name, date: date});
  // console.log(todoList);

  inputElement.value = '';

  renderTodoList();
};