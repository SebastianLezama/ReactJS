import { parse } from 'node-html-parser';
const parse = require('node-html-parser');

export const person = () => {
  const users = [
    {
      id: 1,
      name: 'Eric'
    },
    {
      id: 2,
      name: 'Sebastian'
    }
  ];
  const app = document.getElementById('app');
  const avatar = ({ id, name }) => {
    const src = 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
    return `< class="id">${id} /><div class="name">${name}</div><img src='${src}' alt='example image'/><br/><br/>`
  };
  
  return users.forEach(user => app.innerHTML += avatar(user))
}