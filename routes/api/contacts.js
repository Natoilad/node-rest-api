const express = require('express');
const validBody = require('../../middllware/middleware.js');
const ctrl = require('../../controllers/contact-controllers.js');
const { schema } = require('../../models/contact.js');
// const addSchema = require('../../schemas/schemas.js');

// console.log(addSchema);
const router = express.Router();
router.get('/', ctrl.listContacts);
// router.get('/:contactId', ctrl.getContactById);
router.post('/', validBody(schema.addSchema), ctrl.addContact);
// router.put('/:contactId', validBody(schema), ctrl.updateContact);
// router.delete('/:contactId', ctrl.removeContact);
module.exports = router;
