'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // users.hasMany(models.todos,{as:'user'})
    // models.users.hasMany(models.todos)

    // associations can be defined here
  };
  return users;
};