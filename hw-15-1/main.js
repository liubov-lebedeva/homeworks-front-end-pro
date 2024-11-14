const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
let serialNumber = +localStorage.getItem("serialNumber") || 0;

function initializeTodos() {
    savedTodos.forEach(todo => {
        addTodoToDOM(todo.id, todo.text, todo.completed);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
        const id = createId();
        addTodoToDOM(id, taskText, false);
        saveToLocalStorage(id, taskText, false);
        input.value = "";
    }
});


const createId = () => {
    serialNumber++;
    localStorage.setItem("serialNumber", serialNumber);
    return serialNumber;
}

function addTodoToDOM(id, text, completed) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (completed) li.classList.add("todo-item--checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("todo-item--checked");
        updateLocalStorage(id, checkbox.checked);
    });

    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("todo-item__description");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("todo-item__delete");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        deleteFromLocalStorage(id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todosWrapper.appendChild(li);
}

function saveToLocalStorage(id, text, completed) {
    savedTodos.push({id, text, completed});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function updateLocalStorage(id, completed) {
    const todoIndex = savedTodos.findIndex(todo => todo.id === id);
    savedTodos[todoIndex].completed = completed;
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function deleteFromLocalStorage(id) {
    savedTodos = savedTodos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

initializeTodos();