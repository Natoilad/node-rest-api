const ctrlWrapper = require('../helpers/ctrlWrapper');
const { HttpError } = require('../helpers');
const contacts = require('../models/contacts');

const listContacts = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
};
