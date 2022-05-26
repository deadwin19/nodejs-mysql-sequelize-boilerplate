var Sequelize = require("sequelize");
 
// create connection
const db = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
module.exports = db;