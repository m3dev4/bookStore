
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://segifam571:plWEOkZ42ZbKd0e7@books.y4h7d.mongodb.net/?retryWrites=true&w=majority&appName=Books'

mongoose.connect(`${MONGODB_URI}`)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));