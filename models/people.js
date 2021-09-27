const PeopleModel = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    office: DataTypes.STRING,
    birthdate: DataTypes.DATE
  });

  return People;
}

module.exports = PeopleModel;
