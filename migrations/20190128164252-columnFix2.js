'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'firstName',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    ).then(()=>{
      return queryInterface.addColumn(
        'users',
        'lastName',
        {
          type: Sequelize.STRING,
          allowNull:false
        }
      )
    }).then(()=>{
      return queryInterface.addColumn(
        'users',
        'zipcode',
        {
          type: Sequelize.STRING,
          allowNull:false
        }
      )
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'firstName')
    .then(()=>{
      return queryInterface.removeColumn('users', 'lastName')
    })
    .then(()=>{
      return queryInterface.removeColumn('users', 'zipcode')
    })
  }
};
