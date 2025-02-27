const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

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

// Fetch all schools
async function getAllSchools() {
  const db = await connectDB();
  return db.collection('school').find({}).toArray();
}

// Fetch a school by ID
async function getSchoolById(schoolId) {
  const db = await connectDB();
  return db.collection('school').findOne({ _id: new ObjectId(schoolId) });
}

// Fetch boards, mediums, grades, and book sets dynamically
async function getSchoolData(schoolId, board, medium, grade) {
  const db = await connectDB();
  const query = { _id: new ObjectId(schoolId) };

  if (board) {
    query["boards"] = { $elemMatch: { board: board } };
  }
  if (medium) {
    query["boards.mediums"] = { $elemMatch: { medium: medium } };
  }
  if (grade) {
    query["boards.mediums.grades"] = { $elemMatch: { grade: parseInt(grade) } };
  }

  console.log('getSchoolData query:', JSON.stringify(query, null, 2));

  const result = await db.collection('school').findOne(query);
  console.log('getSchoolData result:', result);
  return result;
}

// Fetch school by board within a particular school
async function getSchoolByBoard(schoolId, board) {
  const db = await connectDB();
  const query = { _id: new ObjectId(schoolId), "boards.board": board };
  console.log('getSchoolByBoard query:', query);
  const result = await db.collection('school').findOne(query, { projection: { name: 1, boards: 1, mediums: 1, grades: 1, book_set: 1 } });
  console.log('getSchoolByBoard result:', result);
  return result;
}

// Fetch school by board and medium within a particular school
async function getSchoolByBoardAndMedium(schoolId, board, medium) {
  const db = await connectDB();
  const query = { _id: new ObjectId(schoolId), "boards.board": board, "mediums.medium": medium };
  console.log('getSchoolByBoardAndMedium query:', query);
  const result = await db.collection('school').findOne(query, { projection: { name: 1, boards: 1, mediums: 1, grades: 1, book_set: 1 } });
  console.log('getSchoolByBoardAndMedium result:', result);
  return result;
}

// Fetch school by board, medium, and grade within a particular school
async function getSchoolByBoardMediumAndGrade(schoolId, board, medium, grade) {
  const db = await connectDB();
  const query = { _id: new ObjectId(schoolId), "boards.board": board, "mediums.medium": medium, "grades.grade": parseInt(grade) };
  console.log('getSchoolByBoardMediumAndGrade query:', query);
  const result = await db.collection('school').findOne(query, { projection: { name: 1, boards: 1, mediums: 1, grades: 1, book_set: 1 } });
  console.log('getSchoolByBoardMediumAndGrade result:', result);
  return result;
}

// Fetch book set for a school by board, medium, and grade
async function getBookSetByBoardMediumAndGrade(schoolId, board, medium, grade) {
  const db = await connectDB();
  const query = { _id: new ObjectId(schoolId), "boards.board": board, "mediums.medium": medium, "grades.grade": parseInt(grade) };
  console.log('getBookSetByBoardMediumAndGrade query:', query);
  const result = await db.collection('school').findOne(query, { projection: { book_set: 1 } });
  console.log('getBookSetByBoardMediumAndGrade result:', result);
  return result;
}

// Fetch products by category and optional subcategory
async function getProducts(category, subcategory = null) {
  const db = await connectDB();
  const pipeline = [
    { $match: { name: category } },
    { $lookup: {
        from: "subcategories",
        localField: "name",
        foreignField: "category",
        as: "subcategories"
    }},
    { $unwind: "$subcategories" },
  ];

  if (subcategory) {
    pipeline.push({ $match: { "subcategories.subname": subcategory } });
  }

  pipeline.push({
    $facet: {
      stationeries: [
        { $lookup: {
            from: "stationeries",
            localField: "subcategories.subname",
            foreignField: "subcategory",
            as: "stationeries"
        }},
        { $unwind: "$stationeries" },
        { $project: { _id: "$stationeries._id", category: "$name", subcategory: "$subcategories.subname", ptype: "$stationeries.ptype", company: "$stationeries.company", product_name: "$stationeries.product_name", price: "$stationeries.price", color_options: "$stationeries.color_options", description: "$stationeries.description", image_link: "$stationeries.image_link", min_stock_level: "$stationeries.min_stock_level", status: "$stationeries.status", stock_quantity: "$stationeries.stock_quantity" } }
      ],
      books: [
        { $lookup: {
            from: "books",
            localField: "subcategories.subname",
            foreignField: "subcategory",
            as: "books"
        }},
        { $unwind: "$books" },
        { $project: { _id: "$books._id", category: "$name", subcategory: "$subcategories.subname", grade: "$books.grade", subject: "$books.subject", price: "$books.price", publisher: "$books.publisher", author: "$books.author", board: "$books.board", medium: "$books.medium", min_stock_level: "$books.min_stock_level", status: "$books.status", stock_quantity: "$books.stock_quantity", image_link: "$books.image_link", product_name: "$books.product_name" } }
      ]
    }
  });

  return db.collection('categories').aggregate(pipeline).toArray();
}

// Routes
app.get('/schools', async (req, res) => {
  try {
    res.status(200).json(await getAllSchools());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/schools/:schoolId', async (req, res) => {
  try {
    res.status(200).json(await getSchoolById(req.params.schoolId));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/schools/:schoolId/boards/:board?/mediums/:medium?/grades/:grade?/books', async (req, res) => {
  try {
    const { schoolId, board, medium, grade } = req.params;
    res.status(200).json(await getSchoolData(schoolId, board, medium, grade));
  } catch (error) {
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
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch book set for a school by board, medium, and grade
app.get('/schools/:schoolId/board/:board/medium/:medium/grade/:grade/bookset', async (req, res) => {
  try {
    const { schoolId, board, medium, grade } = req.params;
    const result = await getBookSetByBoardMediumAndGrade(schoolId, board, medium, grade);
    console.log('getBookSetByBoardMediumAndGrade result:', result);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/allproducts/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const result = await getProducts(category);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/allproducts/category/:category/subcategory/:subcategory', async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const result = await getProducts(category, subcategory);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
