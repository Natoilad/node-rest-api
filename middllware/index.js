const { validBody, validFavoriteBody } = require('./middleware');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');

module.exports = {
  validBody,
  validFavoriteBody,
  isValidId,
  authenticate,
};
