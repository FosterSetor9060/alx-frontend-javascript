# 0x03. ES6 Data Manipulation

Welcome to the ES6 Data Manipulation project! In this repository, we'll explore various techniques and data structures in ES6 for manipulating data. You'll learn how to use map, filter, and reduce on arrays, work with typed arrays, and utilize the Set, Map, and WeakMap data structures.

## Learning Objectives
By the end of this project, you should be able to explain the following concepts without relying on external resources:
- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The Set, Map, and WeakMap data structures

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
In your home directory:
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3

Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.

Configuration Files
Please use the provided configuration files for the following tasks:

package.json
babel.config.js
.eslintrc.js
