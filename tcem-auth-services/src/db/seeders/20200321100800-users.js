module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('users', [{
      password: 'minh',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
