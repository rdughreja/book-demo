const express = require('express');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb+srv://KrinaBhalodiya:krina22030401020@cluster0.lmttp.mongodb.net/';
const client = new MongoClient(uri);

// Connect once and reuse the client
async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db('BookStore');
}

// Function to fetch all schools
async function getAllSchools() {
  const db = await connectDB();
  return db.collection('school').find({}).toArray();
}

// Function to fetch a particular school by ID
async function getSchoolById(schoolId) {
  const db = await connectDB();
  return db.collection('school').findOne({ _id: new ObjectId(schoolId) });
}

// Function to fetch school by board within a particular school
async function getSchoolByBoard(schoolId, board) {
  const db = await connectDB();
  const result = await db.collection('school').findOne(
    { _id: new ObjectId(schoolId), "boards.board": board },
    { projection: { name: 1, boards: 1, mediums: 1, grades: 1, book_set: 1 } }
  );
  console.log('getSchoolByBoard result:', result);
  return result;
}

// Function to fetch school by board and medium within a particular school
async function getSchoolByBoardAndMedium(schoolId, board, medium) {
  const db = await connectDB();
  const result = await db.collection('school').findOne(
    { _id: new ObjectId(schoolId), "boards.board": board, "mediums.medium": medium },
    { projection: { name: 1, boards: 1, mediums: 1, grades: 1, book_set: 1 } }
  );
  console.log('getSchoolByBoardAndMedium result:', result);
  return result;
}

// Function to fetch school by board, medium, and grade within a particular school
async function getSchoolByBoardMediumAndGrade(schoolId, board, medium, grade) {
  const db = await connectDB();
  const result = await db.collection('school').findOne(
    { _id: new ObjectId(schoolId), "boards.board": board, "mediums.medium": medium, "grades.grade": grade },
    { projection: { name: 1, boards: 1, mediums: 1, grades: 1, book_set: 1 } }
  );
  console.log('getSchoolByBoardMediumAndGrade result:', result);
  return result;
}

// Function to fetch book set for a school by board, medium, and grade
async function getBookSetByBoardMediumAndGrade(schoolId, board, medium, grade) {
  const db = await connectDB();
  const result = await db.collection('school').findOne(
    { _id: new ObjectId(schoolId), "boards.board": board, "mediums.medium": medium, "grades.grade": grade },
    { projection: { book_set: 1 } }
  );
  console.log('getBookSetByBoardMediumAndGrade result:', result);
  return result;
}

// Route to list all schools
app.get('/schools', async (req, res) => {
  try {
    const result = await getAllSchools();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to display data of a particular school by ID
app.get('/schools/:schoolId', async (req, res) => {
  try {
    const { schoolId } = req.params;
    const result = await getSchoolById(schoolId);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch school by board within a particular school
app.get('/schools/:schoolId/board/:board', async (req, res) => {
  try {
    const { schoolId, board } = req.params;
    const result = await getSchoolByBoard(schoolId, board);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch school by board and medium within a particular school
app.get('/schools/:schoolId/board/:board/medium/:medium', async (req, res) => {
  try {
    const { schoolId, board, medium } = req.params;
    const result = await getSchoolByBoardAndMedium(schoolId, board, medium);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch school by board, medium, and grade within a particular school
app.get('/schools/:schoolId/board/:board/medium/:medium/grade/:grade', async (req, res) => {
  try {
    const { schoolId, board, medium, grade } = req.params;
    const result = await getSchoolByBoardMediumAndGrade(schoolId, board, medium, grade);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status500).json({ error: error.message });
  }
});

// Route to fetch book set for a school by board, medium, and grade
app.get('/schools/:schoolId/board/:board/medium/:medium/grade/:grade/bookset', async (req, res) => {
  try {
    const { schoolId, board, medium, grade } = req.params;
    const result = await getBookSetByBoardMediumAndGrade(schoolId, board, medium, grade);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
