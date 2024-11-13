let id = 1;
function addTodoApp() {
    let fullName = document.getElementById('name');
    let todos = document.getElementById('todos');
    let divElem = document.createElement('div');
    divElem.setAttribute('id', id);

    // delete button
    let delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.setAttribute('onclick', `deleteTodo(${id})`);

    // update button
    let updBtn = document.createElement('button');
    updBtn.textContent = "Update";
    updBtn.setAttribute('onclick', `updateTodo(${id})`);

    let para = document.createElement('p');
    para.textContent = fullName.value;
    divElem.appendChild(para);
    divElem.appendChild(delBtn);
    divElem.appendChild(updBtn);
    todos.appendChild(divElem);
    id++;
}

function deleteTodo(id) {
    let delId = document.getElementById(id);
    let parenrDel = delId.parentNode;
    parenrDel.removeChild(delId);
}

function updateTodo(id) {
    let updId = document.getElementById(id);
    let paraElem = updId.querySelector('p');
    let fullName = document.getElementById('name');
    paraElem.textContent = fullName.value;
}