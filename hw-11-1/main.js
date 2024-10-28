const generateMultTable = (selector) => {
    let table = document.querySelector(selector);

    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            td.textContent = (i * j).toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};


window.addEventListener('load', () => {
        generateMultTable('.table');
    }
);