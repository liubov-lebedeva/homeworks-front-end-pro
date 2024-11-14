const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

function initializeTodos() {
    savedTodos.forEach(todo => {
        addTodoToDOM(todo.text, todo.completed);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
        addTodoToDOM(taskText, false);
        saveToLocalStorage(taskText, false);
        input.value = "";
    }
});

function addTodoToDOM(text, completed) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (completed) li.classList.add("todo-item--checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("todo-item--checked");
        updateLocalStorage(text, checkbox.checked);
    });

    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("todo-item__description");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("todo-item__delete");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        deleteFromLocalStorage(text);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todosWrapper.appendChild(li);
}

function saveToLocalStorage(text, completed) {
    savedTodos.push({text, completed});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function updateLocalStorage(text, completed) {
    const todoIndex = savedTodos.findIndex(todo => todo.text === text);
    if (todoIndex > -1) {
        savedTodos[todoIndex].completed = completed;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
}

function deleteFromLocalStorage(text) {
    const updatedTodos = savedTodos.filter(todo => todo.text !== text);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

initializeTodos();