'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'users',
        [
          {
            fullName: 'Admin',
            password:
              '$2a$05$qCauZONPbOjawbEE.mN6FOGcXv1sy6mWEqdWrvNkUh/cBtV8Hkvsm',
            email: 'admin@foo.com',
          },
          {
            fullName: 'User',
            password:
              '$2a$05$ecLJ47W14l7QF62QnMai/.95InI2v72qVg1VNMGjFj4WPZrLVMqpa',
            email: 'user@foo.com',
          },
        ],
        { transaction },
      );

      await queryInterface.bulkInsert(
        'roles',
        [
          {
            value: 'ADMIN',
            description: 'Admin role',
          },
          {
            value: 'USER',
            description: 'User role',
          },
        ],
        { transaction },
      );

      await queryInterface.bulkInsert(
        'user_roles',
        [
          {
            userId: 1,
            roleId: 1,
          },
          {
            userId: 1,
            roleId: 2,
          },
          {
            userId: 2,
            roleId: 2,
          },
        ],
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('roles', null, {});
  },
};
