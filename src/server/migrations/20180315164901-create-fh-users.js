'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fh_users', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      },
      profile_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
          allowNull: false,
          type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fh_users');
  }
};