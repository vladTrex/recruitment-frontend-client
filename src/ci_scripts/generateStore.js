const uuidv4 = require('uuid/v4');
const fs = require('fs');

const source = [
    {title: 'Vacancy 1', description: 'Some description for vacancy 1'},
    {title: 'Vacancy 2', description: 'Some description for vacancy 2'},
    {title: 'Vacancy 3', description: 'Some description for vacancy 3'},
    {title: 'Vacancy 4', description: 'Some description for vacancy 4'},
];

console.log('-- Start generate store --');
console.log(uuidv4());

const vacancies = source.map(item => {
    const newItem = Object.assign({}, item, {id: uuidv4()});
    console.log(newItem);
    return newItem;
});

const store = {vacancies: vacancies};

fs.writeFile('./dist/store.json', JSON.stringify(store, null, 4), 'utf8', function (err) {
    if (err) throw err;
    console.log('-- Store was generated --');
});
  

