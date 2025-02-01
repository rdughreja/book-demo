const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const posRoutes = require('./routes/posRoutes');
const empRoutes = require('./routes/empRoutes');
const app = express();
const port = 5000;

// Middleware 
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/pos', posRoutes);
app.use("/employees", empRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
