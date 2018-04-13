'use strict';
const { fh_users } = require('../models');

module.exports = {
    up: (queryInterface, Sequelize) => {
        console.log("I AM HERE")
       return fh_users.create({"email_address": "my2@email.com", "profile_id": 1, "password": 123, "is_hafiz": false}).then(usr => {
            console.log('********');
        }).catch(err => {
            console.log(err.message);
       });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('fh_users', null, {});
    }
};
