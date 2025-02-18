const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const uri = 'mongodb+srv://KrinaBhalodiya:krina22030401020@cluster0.lmttp.mongodb.net/';
const client = new MongoClient(uri);

app.get('/allproducts/category/:category', async (req, res) => {
  const { category } = req.params;

  try {
    await client.connect();
    const db = client.db('BookStore');

    // Match the category by name
    const matchStage = { $match: { name: category } };
    const matchResult = await db.collection('categories').aggregate([matchStage]).toArray();
    console.log('Match Stage Result:', matchResult);

    // Lookup subcategories
    const lookupSubcategoriesStage = {
      $lookup: {
        from: "subcategories",
        localField: "name",
        foreignField: "category",
        as: "subcategories"
      }
    };
    const lookupSubcategoriesResult = await db.collection('categories').aggregate([matchStage, lookupSubcategoriesStage]).toArray();
    console.log('Lookup Subcategories Stage Result:', lookupSubcategoriesResult);

    // Unwind subcategories
    const unwindSubcategoriesStage = { $unwind: "$subcategories" };
    const unwindSubcategoriesResult = await db.collection('categories').aggregate([matchStage, lookupSubcategoriesStage, unwindSubcategoriesStage]).toArray();
    console.log('Unwind Subcategories Stage Result:', unwindSubcategoriesResult);

    // Lookup stationeries
    const lookupStationeriesStage = {
      $lookup: {
        from: "stationeries",
        localField: "subcategories.subname",
        foreignField: "subcategory",
        as: "stationeries"
      }
    };
    const lookupStationeriesResult = await db.collection('categories').aggregate([matchStage, lookupSubcategoriesStage, unwindSubcategoriesStage, lookupStationeriesStage]).toArray();
    console.log('Lookup Stationeries Stage Result:', lookupStationeriesResult);

    // Unwind stationeries
    const unwindStationeriesStage = { $unwind: "$stationeries" };
    const unwindStationeriesResult = await db.collection('categories').aggregate([matchStage, lookupSubcategoriesStage, unwindSubcategoriesStage, lookupStationeriesStage, unwindStationeriesStage]).toArray();
    console.log('Unwind Stationeries Stage Result:', unwindStationeriesResult);

    // Project the final result
    const projectStage = {
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
    };
    const finalResult = await db.collection('categories').aggregate([matchStage, lookupSubcategoriesStage, unwindSubcategoriesStage, lookupStationeriesStage, unwindStationeriesStage, projectStage]).toArray();
    console.log('Final Aggregation Result:', finalResult);

    res.status(200).json(finalResult);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});