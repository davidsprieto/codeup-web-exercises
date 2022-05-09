/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the users array
function addUser(name, email, languages) {
  users[5] = {};
  users[5].name = name;
  users[5].email = email;
  users[5].languages = languages;
}
addUser('David', 'david.s.prieto1@gmail.com', ['html', 'css', 'javascript']);
console.log(users);

// Can also be hard-coded into the object or written using .push() method:
users.push({
  name: 'David',
  email: 'david.s.prieto1@gmail.com',
  languages: ['html', 'css', 'javascript']
});

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'David';
const email = 'david.s.prieto1@gmail.com';
const languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
  return emails.push(user.email);
});
// above code rewritten using an arrow function:
users.forEach((user) => {
  return emails.push(user.email);
});

users.forEach(function(user) {
  return names.push(user.name);
});
// above code rewritten using an arrow function:
users.forEach((user) => {
  return names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach((user) => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

// above code rewritten using object destructuring:
  const {name, email, languages} = user;

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

  // above code rewritten using template strings:
  developers.push(`${name}'s email is ${email} and ${name} knows the programming languages: ${languages}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

// above code rewritten using a for..of loop:
for (let developer of developers) {

  // TODO: rewrite the assignment below to use template strings
  // list += '<li>' + developer + '</li>';

  // above code rewritten using template strings:
  list += `<li> ${developer} </li>`;

}
list += '</ul>';
