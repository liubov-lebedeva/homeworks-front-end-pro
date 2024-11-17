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
    localStorage.setItem("serialNumber", serialNumber.toString());
    return serialNumber;
}

function addTodoToDOM(id, text, completed) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.dataset.id = id;
    if (completed) li.classList.add("todo-item--checked");

    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${completed ? "checked" : ""}>
        <span class="todo-item__description">${text}</span>
        <button class="todo-item__delete">Delete</button>
    `;

    todosWrapper.appendChild(li);
}


todosWrapper.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("todo-checkbox")) {
        const li = target.closest(".todo-item");
        const id = +li.dataset.id;
        const isChecked = target.checked;

        li.classList.toggle("todo-item--checked", isChecked);
        updateLocalStorage(id, isChecked);
    }

    if (target.classList.contains("todo-item__delete")) {
        const li = target.closest(".todo-item");
        const id = +li.dataset.id;

        li.remove();
        deleteFromLocalStorage(id);
    }
});


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