const getTodos = async () => {
    const response = await fetch("http://localhost:8080/api/todos");
    return await response.json();
}

const addTodo = async (text) => {
    const response = await fetch("http://localhost:8080/api/todos", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: text
        })
    });
}


document.querySelector('#get').addEventListener('click', async () => {
    const todos = await getTodos();
    console.log(todos);
});

document.querySelector('#add').addEventListener('click', () => {
    const text = document.querySelector('#todo-text').value;
    if (!text) {
        return;
    }
    addTodo(text);
});