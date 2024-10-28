const generateMultTable = (selector, rows, columns) => {
    let table = document.querySelector(selector);

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            let td = document.createElement('td');
            td.textContent = (i * j).toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};


window.addEventListener('load', () => {
        generateMultTable('.table', 10, 10);
    }
);