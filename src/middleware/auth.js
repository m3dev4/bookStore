// src/middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, '60b2fe9a3e6c68f080e0deed1fa78fea');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Veuillez vous authentifier.' });
  }
};

module.exports = auth;