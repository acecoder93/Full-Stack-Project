'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    tasks: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  todos.associate = function(models) {
    // associations can be defined here
  };
  return todos;
};