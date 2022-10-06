const path = require('path');
const fs = require('fs');

const render = employees => {
const html = [];

html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join("")
);
return renderMain (html.join(""));
};