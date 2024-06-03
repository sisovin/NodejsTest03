const { format } = require('date-fns');
/*const uuid = require('uuid');*/
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

/*console.log(uuid.v4());*/
console.log(uuid());

console.log();

/* check the website: https://www.npmjs.com/package/date-fns */
/* check the website: https://www.npmjs.com/package/uuid */
/* check the website: https://www.npmjs.com/package/uuid#api */
/* type: nodemon run dev */
/* type: nodemon run start */
/* type: npm i date-fns */
/* type: npm i uuid */
/* type: npm i nodemon --save-dev */
/* type: npm i --save-dev nodemon */
/* type: npm i nodemod -g */
/* type: npm i nodemon -D */
/* type: npm rm nodemon */
/* type: npm view react */
/* type: npm view react version */
/* To install nodemon glibally, type: npm i nodemon -g */
/* type: nodemon to run the application */
/* type: npm init -y if you want to skip all the flags*/
/* type: npm init */
/* Certainly! npm (Node Package Manager) has a variety of special commands that can be used for different purposes in your Node.js projects. Here are some of the special npm commands:

- npm init: Initializes a new Node.js project and creates a package.json file¹.
- npm install: Installs all the dependencies listed in your package.json file¹.
- npm install <package-name>: Installs a specific package to your project¹.
- npm update: Updates all the packages to their latest versions based on the specified ranges in `package.json`¹.
- npm run <script>: Runs a script defined in the scripts section of your `package.json`¹.
- npm test: Runs the test script defined in your `package.json`¹.
- npm start: Runs the start script to start your application¹.
- npm ci: Installs dependencies directly from package-lock.json and provides a clean slate for your project¹.
- npm audit: Checks your project for vulnerabilities and automatically fixes many of them¹.
- npm publish: Publishes a package to the npm registry¹.
- npm version: Bumps the version of your package, updating the package.json and creating a new commit¹.

These commands are just a few examples of what npm can do. npm is a powerful tool that helps manage packages and dependencies in Node.js projects, and it offers many more commands and options to streamline development workflows. For a complete list of npm commands and their descriptions, you can refer to the [npm documentation](^1^).

Source: Conversation with Copilot, 5/31/2024
(1) CLI Commands | npm Docs. https://docs.npmjs.com/cli/v6/commands/.
(2) CLI Commands | npm Docs. https://docs.npmjs.com/cli/v6/commands/.
(3) npm Cheat Sheet - Most Common Commands and nvm - freeCodeCamp.org. https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/.
(4) GitHub - Sunil-Pradhan/npm-cheatsheet: A list of terminal commands .... https://github.com/Sunil-Pradhan/npm-cheatsheet.
(5) Commonly Used NPM Commands. https://webreference.com/cheat-sheets/npm/.
(6) npm commands every developer should know - DEV Community. https://dev.to/naveenchandar/npm-commands-every-developer-should-know-13dk.

Npmjs (https://docs.npmjs.com/cli/v6/commands/)
CLI Commands | npm Docs
Documentation for the npm registry, website, and command-line interface
*/

