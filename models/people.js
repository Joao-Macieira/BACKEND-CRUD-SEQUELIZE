const PeopleModel = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    office: DataTypes.STRING,
    birthdate: DataTypes.DATE
  });

  People.associate = ({ User }) => {
    People.hasOne(User);
  };

  return People;
}

module.exports = PeopleModel;
