const express = require('express'); 
const router = express.Router();
const { 
    // createSale,
    getBoards,
    getStandards,
    getBooks,
    getMediums,
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
    // trackEmployeeSales,
    getTopSellingProducts
} = require('../controllers/posControllers');

router.get('/boards', getBoards);
router.get('/mediums/:board', getMediums);
router.get('/standards/:board/:medium', getStandards);
router.get('/books/:board/:medium/:standard', getBooks);
// Define routes with proper callbacks
router.post('/:dbName/:collectionName/cart/add', addToCart);
router.delete('/cart/remove', removeFromCart);
router.put('/cart/update', updateCartItem);
router.post('/cart/discount', applyDiscount);
router.post('/cart/checkout', checkout);
router.get('/getSales', getSales);
router.get('/sales/:saleId', getSaleDetails);
router.post('/sales/refund', processRefund);
router.post('/:dbName/:collectionName/inventory/update', updateInventory);
router.get('/:dbName/:collectionName/inventory/status', getInventoryStatus);
router.get('/:dbName/:collectionName/inventory/low-stock', getLowStockProducts);
router.get('/reports/daily-sales', getDailySalesReport);
// router.get('/reports/employee-sales', trackEmployeeSales);
router.get('/reports/:dbName/:collectionName/top-selling', getTopSellingProducts);// Ensure this route is defined

module.exports = router;