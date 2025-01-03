const client = require('../config/database');

// Allowed databases and collections
const allowedDatabases = [
  'Adhesives_and_Tapes', 'Art_and_Craft_Supplies', 'Desk_Accessories',
  'Educational_Supplies', 'Filing_and_Storage', 'Office_Supplies',
  'Paper_Products', 'Presentation_and_Display', 'Technology_Accessories',
  'Writing_Instruments', 'sample_mflix'
];

const allowedCollections = {
  'Adhesives_and_Tapes': ['GlueSticks', 'DoubleSidedTape', 'HotGlueGun', 'MaskingTape', 'SuperGlue'],
  'Art_and_Craft_Supplies': ['CanvasBoards', 'CraftScissors', 'Crayons', 'PaintBrushes', 'WatercolorPaints'],
  'Desk_Accessories': ['DeskCalendars', 'DeskOrganizers', 'MousePads', 'Paperweights', 'PenHolders'],
  'Educational_Supplies': ['BasicCalculators', 'Flashcards', 'GeometryBoxes', 'LearningCharts', 'Protractors'],
  'Filing_and_Storage': ['LeverArchFiles', 'ArchiveBoxes', 'ExpandingDocumentOrganizers', 'MagazineHolders', 'ZipperedDocumentPouches'],
  'Office_Supplies': ['BinderClips', 'FileFolders', 'PaperClips', 'Scissors', 'Staplers'],
  'Paper_Products': ['A4Sheets', 'Envelopes', 'RuledNotebooks', 'Sketchbooks', 'StickyNotes'],
  'Presentation_and_Display': ['Whiteboards', 'BulletinBoards', 'EaselStands', 'FlipCharts', 'ProjectorScreens'],
  'Technology_Accessories': ['CableTies', 'LaptopStands', 'StylusPens', 'USBDrives', 'WirelessChargers'],
  'Writing_Instruments': ['GelPens', 'BallpointPens', 'Highlighters', 'MechanicalPencils', 'WhiteboardMarkers'],
  'sample_mflix': ['comments', 'embedded_movies', 'movies', 'sessions', 'theaters', 'users']
};

// Utility function to check database and collection validity
const isValidDatabaseAndCollection = (dbName, collectionName) => {
  return allowedDatabases.includes(dbName) && allowedCollections[dbName]?.includes(collectionName);
};

// Fetch documents
const fetchDocuments = async (req, res) => {
  const { dbName, collectionName } = req.params;
  const query = req.query;

  if (!isValidDatabaseAndCollection(dbName, collectionName)) {
    return res.status(404).send('Invalid database or collection.');
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();
    res.json(documents);
  } catch (err) {
    console.error('Error fetching documents:', err);
    res.status(500).send('Error fetching documents.');
  } finally {
    await client.close();
  }
};

// Create a document
const createDocument = async (req, res) => {
  const { dbName, collectionName } = req.params;
  const newDocument = req.body;

  if (!isValidDatabaseAndCollection(dbName, collectionName)) {
    return res.status(404).send('Invalid database or collection.');
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(newDocument);
    res.status(201).json({ message: 'Document added successfully', documentId: result.insertedId });
  } catch (err) {
    console.error('Error inserting document:', err);
    res.status(500).send('Error inserting document.');
  } finally {
    await client.close();
  }
};

// Update documents
// const updateDocuments = async (req, res) => {
//   const { dbName, collectionName } = req.params;
//   const { filter, update } = req.body;

//   if (!isValidDatabaseAndCollection(dbName, collectionName)) {
//     return res.status(404).send('Invalid database or collection.');
//   }

//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);
//     const result = await collection.updateMany(filter, { $set: update });
//     res.json({ message: 'Update successful', matchedCount: result.matchedCount, modifiedCount: result.modifiedCount });
//   } catch (err) {
//     console.error('Error updating documents:', err);
//     res.status(500).send('Error updating documents.');
//   } finally {
//     await client.close();
//   }
// };

// const updateDocuments = async (req, res) => {
//     const { dbName, collectionName } = req.params;
//     const { filter, update } = req.body;

//     if (!filter || !update) {
//         return res.status(400).json({ error: "Filter and update data are required." });
//     }

//     try {
//         const db = client.db(dbName); // Assuming `client` is your MongoDB client instance
//         const collection = db.collection(collectionName);

//         const result = await collection.updateMany(filter, { $set: update });

//         if (result.matchedCount === 0) {
//             return res.status(404).json({ error: "No documents matched the filter." });
//         }

//         res.status(200).json({
//             message: "Documents updated successfully",
//             matchedCount: result.matchedCount,
//             modifiedCount: result.modifiedCount
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred while updating documents." });
//     }
// };

const updateDocuments = async (req, res) => {
  const { dbName, collectionName } = req.params;
  const { filter, update } = req.body;

  if (!filter || !update) {
      return res.status(400).json({ error: "Filter and update data are required." });
  }

  try {
      const db = client.db(dbName); // Assuming `client` is your MongoDB client instance
      const collection = db.collection(collectionName);

      const result = await collection.updateMany(filter, { $set: update });

      if (result.matchedCount === 0) {
          return res.status(404).json({ error: "No documents matched the filter." });
      }

      res.status(200).json({
          message: "Documents updated successfully",
          matchedCount: result.matchedCount,
          modifiedCount: result.modifiedCount
      });
  } catch (error) {
      console.error("Error during update:", error); // Log the actual error
      res.status(500).json({ error: "An error occurred while updating documents." });
  }
};


// Delete documents
// 

const deleteDocuments = async (req, res) => {
  const { dbName, collectionName } = req.params;
  const { filter } = req.body;

  console.log("Delete Request - Filter:", filter);

  if (!filter) {
      return res.status(400).json({ error: "Filter is required for deletion." });
  }

  try {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      console.log("Documents in Collection Before Deletion:", await collection.find({}).toArray());

      const result = await collection.deleteMany(filter);

      console.log("Deletion Result:", result);

      res.status(200).json({
          message: result.deletedCount > 0 ? "Delete successful" : "No documents matched the filter.",
          deletedCount: result.deletedCount
      });
  } catch (error) {
      console.error("Error during deletion:", error);
      res.status(500).json({ error: "An error occurred while deleting documents." });
  }
};


module.exports = { fetchDocuments, createDocument, updateDocuments, deleteDocuments };
