const express = require('express');
const { addEmployee, updateEmployee, deleteEmployee ,fetchEmployees, fetchAttendance, updateAttendance} = require('../controllers/empControllers');

const router = express.Router();

router.post('/add', addEmployee);
router.put('/update', updateEmployee);
router.delete('/delete', deleteEmployee);
router.get('/fetch', fetchEmployees);
router.get('/attendance/fetch', fetchAttendance);
router.put('/attendance/update/:id', updateAttendance);
module.exports = router;