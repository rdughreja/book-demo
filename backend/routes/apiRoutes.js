const express = require('express');
const { fetchDocuments, createDocument, updateDocuments, deleteDocuments } = require('../controllers/apiControllers');

const router = express.Router();

// Fetch documents route
router.get('/fetch/:dbName/:collectionName', fetchDocuments);

// Create a document route
router.post('/create/:dbName/:collectionName', createDocument);

// Update documents route
router.put('/update/:dbName/:collectionName', updateDocuments);

// Delete documents route
router.delete('/delete/:dbName/:collectionName', deleteDocuments);

module.exports = router;
