// server.js
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Bookstore!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});



