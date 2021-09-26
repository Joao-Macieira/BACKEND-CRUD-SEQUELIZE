const PeopleModel = (sequelize) => {
  const People = sequelize.define('People', {
    name: Sequelize.STRING,
    office: Sequelize.STRING
  });

  return People;
}

module.exports = PeopleModel;
