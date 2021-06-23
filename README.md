# E-Commerce Back End

[![Badge](https://img.shields.io/badge/GitHub-twashke-blueviolet?style=flat-square&logo=appveyor)](https://github.com/twashke) [![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

This is an E-Commerce Back End application that utilizes sequelize and the mysql database to create an E-Commerce API using Object-relational mapping.  A full walkthrough for this project can be found [here](insertlink).

## Table of Contents 

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## About the Project

- An E-Commerce Back End application that creates a database and allows the user to make requests to the API.
- Get, Post, Put and Delete Request routes that can be tested using [Insomina](https://insomnia.rest/).
- This application utilizes the following npm packages: \
      - [dotenv](https://www.npmjs.com/package/dotenv) \
      - [express](https://www.npmjs.com/package/express) \
      - [nodemon](https://www.npmjs.com/package/nodemon) \
      - [mysql2](https://www.npmjs.com/package/mysql2) \
      - [sequelize](https://www.npmjs.com/package/sequelize) 

## Installation

- [git clone from github](https://github.com/twashke/E-Commerce-Back-End) 
- **npm install** (to install dependencies)
- **Update** the [.env.Example](.env.EXAMPLE) file with **MYSQL password**
- **npm start** to start server and create the mysql database
- Stop server to seed database (Control C)
- **npm run seed** to seed the database
- **npm start**
- [Insomnia](https://insomnia.rest/) to view API Requests results

## Usage

- Watch the [walkthrough](insertlinkhere).

 **npm start** to create database in MYSQL 
![Start Server and Create Database](Assets/images/server-start-drop-database.gif) /

**npm run seed** in command line 
![npm run seed](Assets/images/npm-run-seed.gif) /

Verify Tables in MYSQL 
![Verify Tables in MYSQL](Assets/images/verify-database-mysql.gif) /

## Contributing

- Starter code provided for the project.

## Tests

- Used [Insomina](https://insomnia.rest/) to test GET, POST, PUT, DELETE Requests.

GET Requests for Products, Categories and Tags 
![GET Requests](Assets/images/verify-GET-Requests.gif) 

Products POST, PUT and DELETE Request Tests
![Product POST PUT DELETE](Assets/images/products-post-put-delete.gif) /

Categories POST, PUT and DELETE Request Tests
![Categories POST PUT DELETE](Assets/images/categories-post-put-delete.gif) /

Tags POST, PUT and DELETE Request Tests
![Tags POST PUT DELETE](Assets/images/tags-post-put-delete.gif) /

## License

This application is covered by the [MIT License](https://opensource.org/licenses/MIT). 
       
      Copyright 2021 Tiffany Washke

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Questions

**Contact Tiffany Washke**

- **Email directly at** twashke@gmail.com
- **GitHub User Name:** [twashke](https://github.com/twashke)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/79234530?v=4) 

