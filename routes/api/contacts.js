const express = require('express');
// const contacts = require('../../models/contacts.js');
// const { HttpError } = require('../../helpers/HttpError.js');
// const Joi = require('joi');
const ctrl = require('../../controllers/contact-controllers.js');
// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });
// const validBody = require('./middllware/validBody.js');
// const schema = require('./schemas/schemas.js');
const router = express.Router();

router.get('/', ctrl.listContacts);

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//       throw HttpError(404, 'Not found ');
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const result = await contacts.addContact(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, 'Not found ');
//     }
//     res.json({
//       message: 'Delete success',
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.put('/:contactId', async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { contactId } = req.params;
//     console.log(contactId);
//     const result = await contacts.updateContact(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, 'Not found ');
//     }

//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
