const PeopleModel = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    office: DataTypes.STRING
  });

  return People;
}

module.exports = PeopleModel;
