const express = require('express');
const { addEmployee, updateEmployee, deleteEmployee } = require('../controllers/empControllers');

const router = express.Router();

router.post('/add', addEmployee);
router.put('/update', updateEmployee);
router.delete('/delete', deleteEmployee);

module.exports = router;