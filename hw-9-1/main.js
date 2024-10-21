const company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 2000}],
        internals: [{name: 'Jack', salary: 1000}],
        QA: {
            manual: [{name: 'Dima', salary: 3400}, {name: 'Masha', salary: 1000}],
            automation: [{name: 'Pavlo', salary: 500}, {name: 'Alex', salary: 500}, {name: 'Mark', salary: 1000}],
        }
    },
    SMM: [{name: 'Denis', salary: 400}, {name: 'Ira', salary: 600}]
};

function getSalariesSum(obj) {
    let sumSalaries = 0;

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            sumSalaries += obj[key].reduce((sum, employee) => sum + employee.salary, 0);
        } else if (typeof obj[key] === 'object') {
            sumSalaries += getSalariesSum(obj[key]);
        }
    }
    return sumSalaries;
}

console.log(getSalariesSum(company));



