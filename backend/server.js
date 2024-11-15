const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('MongoDB connection error:', error));


app.use('/auth', authRoutes); 


app.get('/', (req, res) => {
  res.send('Welcome to the Vendor Management API');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
