// var str = "Hello world!";
// var res = str.slice(0, 5);
// console.log(res);
// const fs = require('fs');
// const generatePage = require(`./src/page-template`);
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profile.DataArgs;




// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const inquirer = require(`inquirer`);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
