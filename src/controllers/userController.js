// src/controllers/userController.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };