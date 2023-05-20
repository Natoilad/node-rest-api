const express = require('express');
const {
  validBody,
  validFavoriteBody,
} = require('../../middllware/middleware.js');
const ctrl = require('../../controllers/contact-controllers.js');
const { schema } = require('../../models/contact.js');
const isValidId = require('../../middllware/isValidId.js');

const router = express.Router();
router.get('/', ctrl.listContacts);
router.get('/:contactId', isValidId, ctrl.getContactById);
router.post('/', validBody(schema.addSchema), ctrl.addContact);
router.put(
  '/:contactId',
  isValidId,
  validBody(schema.addSchema),
  ctrl.updateContact
);
router.patch(
  '/:contactId/favorite',
  isValidId,
  validFavoriteBody(schema.updateFavoriteSchema),
  ctrl.updateFavoriteContact
);
router.delete('/:contactId', isValidId, ctrl.removeContact);
module.exports = router;
