var idCount = 1;
function addTodo() {
    var userInput = document.getElementById('user-input');
    var userEmail = document.getElementById('user-email');
    var userPhone = document.getElementById('user-phone');
    if (userInput.value == "" || userEmail.value == "" || userPhone.value == "") {
        alert("Please Insert Full Form");
    }
    else {
        var todoList = document.getElementById('todo-list');
        var divElement = document.createElement('div')
        divElement.setAttribute('id', idCount);
        divElement.setAttribute('class', 'list')
        divElement.innerHTML = `<span>${userInput.value}</span> <span>${userEmail.value}</span> <span>${userPhone.value}</span> <div class="btn-button"><button class="delete" onclick="deleteTodo(${idCount})" type="button">Delete</button> <button class="update" onclick="updateTodo(${idCount})" type="button">Update</button></div>`;
        todoList.appendChild(divElement);
        idCount = idCount + 1;
    }

}

function deleteTodo(id) {
    var deleteId = document.getElementById(id);
    var deleteElement = deleteId.parentNode;
    deleteElement.removeChild(deleteId);
}

function updateTodo(id) {
    var userInput = document.getElementById('user-input');
    var userEmail = document.getElementById('user-email');
    var userPhone = document.getElementById('user-phone');
    var todoItems = document.getElementById(id);
    todoItems.innerHTML = `<span>${userInput.value}</span> <span>${userEmail.value}</span> <span>${userPhone.value}</span> <button class="delete" onclick="deleteTodo(${id})" type="button">Delete</button> <button class="update" onclick="updateTodo(${id})" type="button">Update</button>`;
}