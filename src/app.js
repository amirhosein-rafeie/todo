const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const { name, date } = todoList[i];
    todoListHTML += `
      <p>${name}</p>
      <p>${date}</p>
      <button 
      class='delete-button'
      onclick='removeFromList(${i})'>Delete</button>
      `;
  }

  const todoListElement = document.querySelector(".js-todo-list");
  todoListElement.innerHTML = todoListHTML;
}

function removeFromList(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function addTodo() {
  const inputElement = document.querySelector(".js-todo-name");

  const dateInputElement = document.querySelector(".js-todo-date");

  const value = {
    name: inputElement.value,
    date: dateInputElement.value,
  };

  todoList.push(value);

  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
