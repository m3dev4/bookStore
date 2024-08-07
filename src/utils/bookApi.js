// src/utils/bookApi.js
const axios = require('axios');

const API_URL = 'http://localhost:3000/api'; // Ajustez l'URL selon votre configuration

// Tâche 10: Obtenir tous les livres - En utilisant une fonction rappel asynchrone
exports.getAllBooks = async (callback) => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    callback(null, response.data);
  } catch (error) {
    callback(error);
  }
};

// Tâche 11: Recherche par ISBN - Utilisation des promesses
exports.getBookByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/books/${isbn}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};

// Tâche 12: Recherche par auteur
exports.getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${API_URL}/books/author/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Tâche 13: Recherche par titre
exports.getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/books/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};