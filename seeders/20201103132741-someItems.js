"use strict";
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
    await queryInterface.bulkInsert("Items", [
      {
        userId: 1,
        name: "Cheese",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "fridge",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Eggs",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "fridge",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Milk",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "fridge",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Butter",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "fridge",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Juice",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "fridge",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Cheese",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "pantry",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Eggs",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "pantry",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Milk",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "pantry",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Butter",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "pantry",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Juice",
        quantity: 1,
        expirationDate: new Date(2020, 11, 10),
        location: "pantry",
        wasted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Items", null, {});
  },
};
