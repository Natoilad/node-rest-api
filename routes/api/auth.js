const express = require('express');

const ctrl = require('../../controllers/auth');

const { validBody, authenticate } = require('../../middllware');

const { schema } = require('../../models/user');

const router = express.Router();

router.post('/register', validBody(schema.registerSchema), ctrl.register);

router.post('/login', validBody(schema.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
