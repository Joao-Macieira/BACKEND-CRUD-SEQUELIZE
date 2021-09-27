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

module.exports = {
  index,
  createForm,
  createProcess
}
