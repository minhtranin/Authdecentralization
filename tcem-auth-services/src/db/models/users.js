module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: DataTypes.INTEGER,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
  },);
  // users.associate = (models) => {
  //   // associations can be defined here
  // };
  return users;
};
