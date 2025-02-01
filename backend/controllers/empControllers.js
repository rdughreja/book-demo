const client = require('../config/database');
const { ObjectId } = require('mongodb');

const addEmployee = async (req, res) => {
    const newEmployee = req.body;
    
    try {
        await client.connect();
        const db = client.db('Role');
        const collection = db.collection('staff_details');
        const result = await collection.insertOne(newEmployee);
        res.status(201).json({ message: 'Employee added successfully', employeeId: result.insertedId });
    } catch (err) {
        console.error('Error inserting employee:', err);
        res.status(500).send('Error inserting employee.');
    } finally {
        await client.close();
    }
}

const updateEmployee = async (req, res) => {
    const filter = req.body.filter;
    const update = req.body.update;
    
    try {
        await client.connect();
        const db = client.db('Role');
        const collection = db.collection('staff_details');
        const result = await collection.updateOne(filter, update);
        res.status(200).json({ message: 'Employee updated successfully', result });
    } catch (err) {
        console.error('Error updating employee:', err);
        res.status(500).send('Error updating employee.');
    } finally {
        await client.close();
    }
}

const deleteEmployee = async (req, res) => {
    const filter = req.body.filter;

    try {
        await client.connect();
        const db = client.db('Role');
        const collection = db.collection('staff_details');
        const result = await collection.deleteOne(filter);
        res.status(200).json({ message: 'Employee deleted successfully', result });
    } catch (err) {
        console.error('Error deleting employee:', err);
        res.status(500).send('Error deleting employee.');
    } finally {
        await client.close();
    }
}

module.exports = { addEmployee, updateEmployee, deleteEmployee };