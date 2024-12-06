$(document).ready(function () {
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    let serialNumber = +localStorage.getItem("serialNumber") || 0;

    function initializeTodos() {
        savedTodos.forEach(todo => {
            addTodoToDOM(todo.id, todo.text, todo.completed);
        });
    }


    $(".js--form").on("submit", function (e) {
        e.preventDefault();
        const taskText = $(".js--form__input").val().trim();
        if (taskText) {
            const id = createId();
            addTodoToDOM(id, taskText, false);
            saveToLocalStorage(id, taskText, false);
            $(".js--form__input").val("");
        }
    });

    const createId = () => {
        serialNumber++;
        localStorage.setItem("serialNumber", serialNumber.toString());
        return serialNumber;
    }

    function saveToLocalStorage(id, text, completed) {
        savedTodos.push({id, text, completed});
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        localStorage.setItem("serialNumber", serialNumber.toString());
    }

    function addTodoToDOM(id, text, completed) {
        const $li = $("<li>").addClass("todo-item").attr("data-id", id).attr("data-text", text);
        $li.html(`
            <div class="todo-item__content">
                <input type="checkbox" class="todo-checkbox" ${completed ? "checked" : ""}>
                <span class="todo-text">${text}</span>
                <div class="todo-buttons">
                    <button class="todo-item__delete">Delete</button>
                    <button class="btn btn-info btn-sm ms-2 show-details-btn" data-bs-toggle="modal" data-bs-target="#taskModal">Details</button>
                </div>
            </div>
        `);
        $(".js--todos-wrapper").append($li);

        $li.find(".show-details-btn").on("click", function () {
            const taskText = $li.find(".todo-text").text();
            $("#taskText").text(taskText);
        });

        $li.find(".todo-item__delete").on("click", function () {
            $li.remove();
            saveTodos();
        });
    }

    function saveTodos() {
        savedTodos = [];
        $(".todo-item").each(function () {
            const id = $(this).data("id");
            const text = $(this).data("text");
            const completed = $(this).find(".todo-checkbox").prop("checked");
            savedTodos.push({id, text, completed});
        });
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }

    initializeTodos();
});