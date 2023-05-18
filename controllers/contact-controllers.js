const ctrlWrapper = require('../helpers/ctrlWrapper');
const { HttpError } = require('../helpers');
const { Contact } = require('../models/contact');

const listContacts = async (req, res) => {
  const result = await Contact.find({}, '-createdAt -updatedAt');
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId, '-createdAt -updatedAt');
  if (!result) {
    throw HttpError(404, 'Not found ');
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body, '-createdAt -updatedAt');
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found ');
  }
  res.json(result);
};

const updateFavoriteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found ');
  }
  res.json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, 'Not found ');
  }
  res.json({
    message: 'Delete success',
  });
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavoriteContact: ctrlWrapper(updateFavoriteContact),
  removeContact: ctrlWrapper(removeContact),
};
