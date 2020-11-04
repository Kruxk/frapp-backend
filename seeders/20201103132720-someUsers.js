'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
     {
       firstName: 'John',
       lastName: 'Doe',
       email: 'johndoe@test.com',
       password: '12345',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      firstName: 'Kees',
      lastName: 'Doe',
      email: 'keesdoe@test.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
