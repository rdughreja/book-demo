const express = require('express');
const router = express.Router();
const {
  fetchDocuments,
  createDocument,
  updateDocuments,
  deleteDocuments,
  fetchAllBooks,
  fetchBooksByCategory
} = require('../controllers/apiControllers');

router.get('/fetch/:dbName/:collectionName', fetchDocuments);
router.post('/create/:dbName/:collectionName', createDocument);
router.put('/update/:dbName/:collectionName', updateDocuments);
router.delete('/delete/:dbName/:collectionName', deleteDocuments);
router.get('/fetch/allBooks', fetchAllBooks);
router.get('/fetch/books', fetchBooksByCategory);

module.exports = router;
