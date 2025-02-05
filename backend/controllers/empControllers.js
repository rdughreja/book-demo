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

const fetchEmployees = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Role');
        const collection = db.collection('staff_details');
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (err) {
        console.error('Error fetching employees:', err);
        res.status(500).send('Error fetching employees.');
    } finally {
        await client.close();
    }
}
  
  // const updateAttendance = async (req, res) => {
  //   const { id } = req.params;
  //   const { status } = req.body;
  //   const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  
  //   try {
  //     await client.connect();
  //     const db = client.db('Role');
  //     const collection = db.collection('attendance');
  
  //     const result = await collection.updateOne(
  //       { employeeId: id, date: today },
  //       { $set: { status } },
  //       { upsert: true } // Create a new document if none exists
  //     );
  
  //     res.status(200).json({ message: 'Attendance updated successfully', result });
  //   } catch (err) {
  //     console.error('Error updating attendance:', err);
  //     res.status(500).send('Error updating attendance.');
  //   } finally {
  //     await client.close();
  //   }
  // };
  
module.exports = { addEmployee, updateEmployee, deleteEmployee, fetchEmployees};