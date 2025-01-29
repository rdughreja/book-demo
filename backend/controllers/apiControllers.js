const client = require('../config/database');
const { ObjectId } = require('mongodb');

// Utility function to check database and collection validity
const isValidDatabaseAndCollection = (dbName, collectionName) => {
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

    // Convert _id to ObjectId if present in query
    if (query._id) {
      query._id = new ObjectId(query._id);
    }

    const documents = await collection.find(query).toArray();
    res.json(documents);
  } catch (err) {
    console.error('Error fetching documents:', err);
    res.status(500).send('Error fetching documents.');
  } finally {
    await client.close();
  }
};

// Create document
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
const updateDocuments = async (req, res) => {
  const { dbName, collectionName } = req.params;
  const filter = req.body.filter;
  const update = req.body.update;

  if (!isValidDatabaseAndCollection(dbName, collectionName)) {
    return res.status(404).send('Invalid database or collection.');
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Convert _id to ObjectId if present in filter
    if (filter._id) {
      filter._id = new ObjectId(filter._id);
    }

    console.log('Filter:', filter); // Debug log
    console.log('Update:', update); // Debug log

    const result = await collection.updateMany(filter, update);
    console.log('Update result:', result); // Debug log

    res.json({ message: 'Documents updated successfully', modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error('Error updating documents:', err);
    res.status(500).send('Error updating documents.');
  } finally {
    await client.close();
  }
};

// Delete documents
const deleteDocuments = async (req, res) => {
  const { dbName, collectionName } = req.params;
  const filter = req.body.filter;

  if (!isValidDatabaseAndCollection(dbName, collectionName)) {
    return res.status(404).send('Invalid database or collection.');
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.deleteMany(filter);
    res.json({
      message: result.deletedCount > 0 ? "Delete successful" : "No documents matched the filter.",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error("Error during deletion:", error);
    res.status(500).json({ error: "An error occurred while deleting documents." });
  } finally {
    await client.close();
  }
};

module.exports = {
  fetchDocuments,
  createDocument,
  updateDocuments,
  deleteDocuments
};
