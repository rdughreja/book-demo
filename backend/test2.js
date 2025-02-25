const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

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
  if (board) query["boards.board"] = board;
  if (medium) query["boards.mediums.medium"] = medium;
  if (grade) query["boards.mediums.grades.grade"] = parseInt(grade);

  return db.collection('school').findOne(query);
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
        { $project: { _id: "$stationeries._id", product_name: "$stationeries.product_name", price: "$stationeries.price", image_link: "$stationeries.image_link" } }
      ],
      books: [
        { $lookup: {
            from: "books",
            localField: "subcategories.subname",
            foreignField: "subcategory",
            as: "books"
        }},
        { $unwind: "$books" },
        { $project: { _id: "$books._id", product_name: "$books.product_name", price: "$books.price", image_link: "$books.image_link" } }
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

app.get('/allproducts/category/:category', async (req, res) => {
  try {
    res.status(200).json(await getProducts(req.params.category));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/allproducts/category/:category/subcategory/:subcategory', async (req, res) => {
  try {
    res.status(200).json(await getProducts(req.params.category, req.params.subcategory));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
