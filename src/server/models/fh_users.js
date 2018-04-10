'use strict';
module.exports = (sequelize, DataTypes) => {
  var fh_users = sequelize.define('fh_users', {
    uuid: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    email_address: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_id: DataTypes.INTEGER.UNSIGNED,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {});
  fh_users.associate = function(models) {
    // associations can be defined here
  };

  fh.create = () => {
    console.log("HI");
  };

  return fh_users;
};