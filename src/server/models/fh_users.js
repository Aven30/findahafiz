'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('fh_users', {
    id: {
      type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email_address: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_id: DataTypes.INTEGER,
    is_hafiz: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  }, {});

  user.associate = function(models) {
    // associations can be defined here
  };

  return user;
};