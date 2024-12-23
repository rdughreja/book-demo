const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Book Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    stock: Number
});

const Book = mongoose.model('Book', bookSchema);

// Add a new book
app.post('/admin/books', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.send(book);
});

// Update a book
app.put('/admin/books/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(book);
});

// Delete a book
app.delete('/admin/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send({ message: 'Book deleted' });
});

// Purchase a book
app.post('/purchase/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(book.stock > 0){
        book.stock -= 1;
        await book.save();
        res.send({ message: 'Purchase successful', book });
    } else {
        res.status(400).send({ message: 'Out of stock' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));