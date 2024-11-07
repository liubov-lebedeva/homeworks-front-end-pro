document.getElementById("add-task-button").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `${taskText} <button class="remove-btn">Remove</button>`;
        document.getElementById('task-list').appendChild(newTask);
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
});

document.getElementById('task-list').addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-btn')) {
        const taskItem = event.target.parentElement;
        document.getElementById('task-list').removeChild(taskItem);
    }
});