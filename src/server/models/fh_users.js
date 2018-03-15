'use strict';
module.exports = (sequelize, DataTypes) => {
  var fh_users = sequelize.define('fh_users', {
    id: DataTypes.INTEGER
  }, {});
  fh_users.associate = function(models) {
    // associations can be defined here
  };
  return fh_users;
};