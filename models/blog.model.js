var Sequelize = require("sequelize");
var db = require("../config/database");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const blog = db.define('blog', {
  
    blog_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

    blog_title: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    blog_desc: {
        type: DataTypes.TEXT,
        defaultValue: '' 
    }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
module.exports = blog;