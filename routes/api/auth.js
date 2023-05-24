const express = require('express');

const ctrl = require('../../controllers/auth');

const {
  validBody,
  authenticate,
  validSubscription,
} = require('../../middllware');

const { schema } = require('../../models/user');

const router = express.Router();

router.post('/register', validBody(schema.registerSchema), ctrl.register);

router.post('/login', validBody(schema.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/',
  authenticate,
  validSubscription(schema.updateSubscription),
  ctrl.updateSubscription
);

module.exports = router;
