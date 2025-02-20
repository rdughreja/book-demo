const express = require('express');
const { MongoClient } = require('mongodb');

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

// Function to fetch products by category and optional subcategory
async function getProducts(category, subcategory = null) {
  const db = await connectDB();

  const pipeline = [
    { $match: { name: category } }, // Match category
    {
      $lookup: {
        from: "subcategories",
        localField: "name",
        foreignField: "category",
        as: "subcategories"
      }
    },
    { $unwind: "$subcategories" },
  ];

  if (subcategory) {
    pipeline.push({ $match: { "subcategories.subname": subcategory } }); // Match subcategory if provided
  }

  pipeline.push({
    $facet: {
      stationeries: [
        {
          $lookup: {
            from: "stationeries",
            localField: "subcategories.subname",
            foreignField: "subcategory",
            as: "stationeries"
          }
        },
        { $unwind: "$stationeries" },
        {
          $project: {
            _id: "$stationeries._id",
            category: "$name",
            subcategory: "$subcategories.subname",
            ptype: "$stationeries.ptype",
            company: "$stationeries.company",
            product_name: "$stationeries.product_name",
            price: "$stationeries.price",
            color_options: "$stationeries.color_options",
            description: "$stationeries.description",
            image_link: "$stationeries.image_link",
            min_stock_level: "$stationeries.min_stock_level",
            status: "$stationeries.status",
            stock_quantity: "$stationeries.stock_quantity"
          }
        }
      ],
      books: [
        {
          $lookup: {
            from: "books",
            localField: "subcategories.subname",
            foreignField: "subcategory",
            as: "books"
          }
        },
        { $unwind: "$books" },
        {
          $project: {
            _id: "$books._id",
            category: "$name",
            subcategory: "$subcategories.subname",
            grade: "$books.grade",
            subject: "$books.subject",
            price: "$books.price",
            publisher: "$books.publisher",
            author: "$books.author",
            board: "$books.board",
            medium: "$books.medium",
            min_stock_level: "$books.min_stock_level",
            status: "$books.status",
            stock_quantity: "$books.stock_quantity",
            image_link: "$books.image_link",
            product_name: "$books.product_name"
          }
        }
      ]
    }
  });

  return db.collection('categories').aggregate(pipeline).toArray();
}

// Route to fetch products by category
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

// Route to fetch products by category and subcategory
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
