const client = require('../config/database');
const { ObjectId } = require('mongodb');

const allowedDatabases = [
    'cbseEnglishMedium', 'cbseEnglishMediumWorkbook', 'cbseHindiMedium', 'cbseHindiMediumWorkbook', 'gsebEnglishMedium', 'gsebEnglishMediumWorkbook', 'gsebGujaratiMedium', 'gsebGujaratiMediumWorkbook', 'icseEnglishMedium', 'icseEnglishMediumWorkbook'
  ];

  const allowedCollections = {
    'cbseEnglishMedium': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'cbseHindiMedium': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'cbseHindiMediumWorkbook': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'gsebEnglishMedium': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'gsebEnglishMediumWorkbook': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'gsebGujaratiMedium': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'gsebGujaratiMediumWorkbook': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'icseEnglishMedium': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'icseEnglishMediumWorkbook': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
    'cbseEnglishMediumWorkbook': ['Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-6', 'Grade-7', 'Grade-8', 'Grade-9', 'Grade-10', 'Grade-11', 'Grade-12'],
  };
// Utility function to check database and collection validity
const isValidDatabaseAndCollection = (dbName, collectionName) => {
   return allowedDatabases.includes(dbName) && allowedCollections[dbName]?.includes(collectionName);
};

// Fetch boards
const getBoards = async (req, res) => {
  try {
    const boards = Object.keys(allowedCollections);
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch mediums based on board
const getMediums = async (req, res) => {
  const { board } = req.params;
  try {
    const mediums = allowedCollections[board] ? Object.keys(allowedCollections[board]) : [];
    res.status(200).json(mediums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch standards based on board and medium
const getStandards = async (req, res) => {
  const { board, medium } = req.params;
  try {
    const standards = allowedCollections[`${board}${medium}`] || [];
    res.status(200).json(standards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch books based on board, medium, and standard
const getBooks = async (req, res) => {
  const { board, medium, standard } = req.params;
  try {
    await client.connect();
    const db = client.db(`${board}${medium}`);
    const collection = db.collection(standard);
    const books = await collection.find().toArray();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
};

// Cart Operations
const addToCart = async (req, res) => {
    const { dbName, collectionName } = req.params;
    const { _id, quantity } = req.body;

    if (!isValidDatabaseAndCollection(dbName, collectionName)) {
        return res.status(404).send('Invalid database or collection.');
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Convert _id to ObjectId
        const productId = new ObjectId(_id);
        console.log('Searching for product with _id:', productId);

        const product = await collection.findOne({ _id: productId });
        console.log('Query result:', product);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        if (product.stock_quantity < quantity) {
            return res.status(400).json({ error: `Only ${product.stock_quantity} units available` });
        }

        const cartItem = {
            productId: product._id,
            quantity,
            price: product.price,
            name: product.product_name,
            total: product.price * quantity,
            created_at: new Date()
        };
        const cartDb = client.db('cart');
        const cartCollection = cartDb.collection('Carts');
        await cartCollection.insertOne(cartItem);

        res.status(201).json({ message: 'Added to cart', cart: cartItem });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const removeFromCart = async (req, res) => {
    const { cartId } = req.body;
    try {
        await client.connect();
        const db = client.db('Adhesives_and_Tapes');
        const cartCollection = db.collection('Carts');
        
        const result = await cartCollection.deleteOne({ _id: new ObjectId(cartId) });
        res.status(200).json({ message: 'Item removed from cart', deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const updateCartItem = async (req, res) => {
    const { cartId, quantity } = req.body;
    try {
        await client.connect();
        const db = client.db('cart');
        const cartCollection = db.collection('Carts');
        
        const cart = await cartCollection.findOne({ _id: new ObjectId(cartId) });
        const newTotal = cart.price * quantity;
        
        const result = await cartCollection.updateOne(
            { _id: new ObjectId(cartId) },
            { $set: { quantity, total: newTotal } }
        );
        res.status(200).json({ message: 'Cart updated', modifiedCount: result.modifiedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const applyDiscount = async (req, res) => {
    const { cartId, discountPercent } = req.body;
    try {
        await client.connect();
        const db = client.db('cart');
        const cartCollection = db.collection('Carts');
        
        const cart = await cartCollection.findOne({ _id: new ObjectId(cartId) });
        const discountedTotal = cart.total * (1 - discountPercent/100);
        
        const result = await cartCollection.updateOne(
            { _id: new ObjectId(cartId) },
            { $set: { total: discountedTotal, discount: discountPercent } }
        );
        res.status(200).json({ message: 'Discount applied', modifiedCount: result.modifiedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

// Sales Management
const createSale = async (req, res) => {
    const { dbName, collectionName } = req.params;
    const { items, totalAmount, paymentMethod, customerId } = req.body;

    if (!isValidDatabaseAndCollection(dbName, collectionName)) {
        return res.status(404).send('Invalid database or collection.');
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const salesCollection = db.collection(collectionName);

        const sale = {
            items,
            totalAmount,
            paymentMethod,
            customerId,
            timestamp: new Date(),
            status: 'completed'
        };

        const result = await salesCollection.insertOne(sale);
        res.status(201).json({ message: 'Sale recorded successfully', saleId: result.insertedId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
};

const checkout = async (req, res) => {
    const { cartId, paymentMethod } = req.body;

    try {
        await client.connect();
        const db = client.db('cart');
        const cartCollection = db.collection('Carts');
        const salesCollection = db.collection('Sales');

        // Convert cartId to ObjectId
        const searchId = new ObjectId(cartId);
        console.log('Searching for cart with _id:', searchId);

        const cart = await cartCollection.findOne({ _id: searchId });
        console.log('Query result:', cart);

        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        const sale = {
            items: [cart],
            totalAmount: cart.total,
            paymentMethod,
            status: 'completed',
            created_at: new Date()
        };

        await salesCollection.insertOne(sale);
        await db.collection('DoubleSidedTape').updateOne(
            { _id: new ObjectId(cart.productId) },
            { $inc: { stock_quantity: -cart.quantity } }
        );

        await cartCollection.deleteOne({ _id: searchId });

        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const getSales = async (req, res) => {
    try {
        await client.connect();
        let allSales = [];

        for (const dbName of allowedDatabases) {
            const db = client.db(cart);
            const collections = db.Sales;

            for (const collectionName of collections) {
                const sales = await db.collection(collectionName).find().toArray();
                allSales = allSales.concat(sales);
            }
        }

        console.log('Fetched sales:', allSales); // Debug log
        res.status(200).json(allSales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const getSaleDetails = async (req, res) => {
    const { saleId } = req.params;
    try {
        await client.connect();
        const db = client.db('Adhesives_and_Tapes');
        const salesCollection = db.collection('Sales');
        
        const sale = await salesCollection.findOne({ _id: new ObjectId(saleId) });
        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};


// Process Refund
const processRefund = async (req, res) => {
    const { saleId, reason } = req.body;

    if (!ObjectId.isValid(saleId)) {
        return res.status(400).json({ error: 'Invalid sale ID format' });
    }

    try {
        await client.connect();
        const db = client.db('Adhesives_and_Tapes');
        const salesCollection = db.collection('Sales');

        const sale = await salesCollection.findOne({ _id: new ObjectId(saleId) });
        if (!sale) {
            return res.status(404).json({ error: 'Sale not found' });
        }

        const refund = {
            saleId: sale._id,
            amount: sale.totalAmount,
            reason,
            created_at: new Date()
        };

        await db.collection('Refunds').insertOne(refund);
        await salesCollection.updateOne(
            { _id: new ObjectId(saleId) },
            { $set: { status: 'refunded' } }
        );

        res.status(200).json({ message: 'Refund processed', refund });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

// Inventory Management
const updateInventory = async (req, res) => {
    const { dbName, collectionName } = req.params;
    const { productId, quantity, operation } = req.body;

    if (!isValidDatabaseAndCollection(dbName, collectionName)) {
        return res.status(404).send('Invalid database or collection.');
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const update = {
            $inc: { stock_quantity: operation === 'decrease' ? -quantity : quantity }
        };

        const result = await collection.updateOne(
            { _id: new ObjectId(productId) },
            update
        );
        
        res.status(200).json({
            message: 'Inventory updated successfully',
            modifiedCount: result.modifiedCount
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const getInventoryStatus = async (req, res) => {
    const { dbName, collectionName } = req.params;

    if (!isValidDatabaseAndCollection(dbName, collectionName)) {
        return res.status(404).send('Invalid database or collection.');
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const products = await db.collection(collectionName).find({}, {
            projection: {
                product_name: 1,
                stock_quantity: 1,
                min_stock_level: 1
            }
        }).toArray();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

const getLowStockProducts = async (req, res) => {
    const { dbName, collectionName } = req.params;

    if (!isValidDatabaseAndCollection(dbName, collectionName)) {
        return res.status(404).send('Invalid database or collection.');
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Find products where stock is below 10
        const products = await collection
            .find({
                stock_quantity: { $lt: 10 }  // Changed to fixed value of 10
            })
            .project({
                product_name: 1,
                stock_quantity: 1,
                price: 1
            })
            .toArray();

        console.log('Low stock products:', products); // Debug log

        if (products.length === 0) {
            return res.status(200).json({ 
                message: 'No products below minimum stock level (10 units)',
                products: []
            });
        }

        res.status(200).json({
            message: 'Low stock products found (below 10 units)',
            count: products.length,
            products
        });
    } catch (error) {
        console.error('Error fetching low stock products:', error);
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

// Reports and Analytics
const getDailySalesReport = async (req, res) => {
    const { date } = req.query;
    try {
        await client.connect();
        const db = client.db('Adhesives_and_Tapes');
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
        
        const sales = await db.collection('Sales')
            .find({
                created_at: {
                    $gte: startDate,
                    $lt: endDate
                }
            })
            .toArray();
            
        const totalSales = sales.reduce((acc, sale) => acc + sale.totalAmount, 0);
        res.status(200).json({ sales, totalSales });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

// const trackEmployeeSales = async (req, res) => {
//     const { employeeId, startDate, endDate } = req.query;
//     try {
//         await client.connect();
//         const db = client.db('Adhesives_and_Tapes');
//         const sales = await db.collection('Sales')
//             .find({
//                 'employeeId': employeeId,
//                 created_at: {
//                     $gte: new Date(startDate),
//                     $lt: new Date(endDate)
//                 }
//             })
//             .toArray();
            
//         const totalSales = sales.reduce((acc, sale) => acc + sale.totalAmount, 0);
//         res.status(200).json({ sales, totalSales });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     } finally {
//         await client.close();
//     }
// };

const getTopSellingProducts = async (req, res) => {
    const { dbName, collectionName } = req.params;

    if (!isValidDatabaseAndCollection(dbName, collectionName)) {
        return res.status(404).send('Invalid database or collection.');
    }

    try {
        await client.connect();
        const db = client.db(dbName);
        const salesCollection = db.collection('Sales');

        const topProducts = await salesCollection.aggregate([
            { $unwind: '$items' },
            {
                $group: {
                    _id: '$items.productId',
                    productName: { $first: '$items.name' },
                    totalQuantity: { $sum: '$items.quantity' },
                    totalRevenue: { $sum: { $multiply: ['$items.price', '$items.quantity'] } }
                }
            },
            { $sort: { totalQuantity: -1 } },
            { $limit: 10 }
        ]).toArray();

        console.log('Top products:', topProducts); // Debug log

        if (topProducts.length === 0) {
            return res.status(200).json({
                message: 'No sales data found',
                products: []
            });
        }

        res.status(200).json({
            message: 'Top selling products retrieved successfully',
            count: topProducts.length,
            products: topProducts
        });
    } catch (error) {
        console.error('Error fetching top selling products:', error);
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
};

module.exports = {
  getBoards,
  getMediums,
  getStandards,
  getBooks,
  createSale,
  addToCart,
  removeFromCart,
  updateCartItem,
  applyDiscount,
  checkout,
  getSales,
  getSaleDetails,
  processRefund,
  updateInventory,
  getInventoryStatus,
  getLowStockProducts,
  getDailySalesReport,
  getTopSellingProducts
};