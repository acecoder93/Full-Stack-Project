'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    tasks: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  todos.associate = function(models) {
    // users.belongsTo(models.todos,{as:'todos'})
    // models.todos.belongsTo(models.users), {
    //   onDelete: "CASCADE",
    //   foreignKey:{
    //     allowNull:false
    //   }
    // }

    // associations can be defined here›
  };
  return todos;
};