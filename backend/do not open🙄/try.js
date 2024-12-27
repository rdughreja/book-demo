const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Generic schema for products
const productSchema = new mongoose.Schema({}, { strict: false });

// Function to switch database
async function switchDatabase(dbName) {
    try {
        await mongoose.connection.close();
        await mongoose.connect(`mongodb+srv://KrinaBhalodiya:krina22030401020@cluster0.lmttp.mongodb.net/${dbName}?retryWrites=true&w=majority`);
        return mongoose.model('Product', productSchema, 'products');
    } catch (error) {
        console.error(`Error switching to database ${dbName}:`, error);
        throw error;
    }
}

// Get products from specific database with filters
app.get('/api/:database/products', async (req, res) => {
    try {
        const { database } = req.params;
        const { minPrice, maxPrice, company } = req.query;
        
        const Product = await switchDatabase(database);
        
        // Build filter object
        let filter = {};
        if (minPrice) filter.price = { $gte: parseFloat(minPrice) };
        if (maxPrice) filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
        if (company) filter.company = company;
        
        const products = await Product.find(filter).lean();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get available databases
app.get('/api/databases', async (req, res) => {
    try {
        const admin = mongoose.connection.db.admin();
        const dbs = await admin.listDatabases();
        res.json(dbs.databases.map(db => db.name));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));