const { request } = require("express");

const index = async ({ People }, request, response) => {
  const peoples = await People.findAll()
  response.render('pessoas/index', { peoples });
};

const createForm = (request, response) => {
  response.render('pessoas/create')
};

const createProcess = async ({ People }, request, response) => {
  await People.create(request.body);

  response.redirect('/pessoas');
};

const editForm = async ({ People }, request, response) => {
  const { id } = request.params;
  const people = await People.findByPk(id);
  response.render('pessoas/edit', { people });
};

const editProcess = async ({ People }, request, response) => {
  const { id } = request.params;

  await People.update(request.body, {
    where: {
      id
    }
  });

  response.redirect('/pessoas');
};

const deleteOne = async ({ People }, request, response) => {
  const { id } = request.params;

  await People.destroy({
    where: {
      id
    }
  });

  response.redirect('/pessoas');
};

module.exports = {
  index,
  createForm,
  createProcess,
  editForm,
  editProcess,
  deleteOne
}
