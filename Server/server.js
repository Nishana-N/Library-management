const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDb = require("./connectDb");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

connectDb();


const bookRoutes = require('./routes/bookRoute.js');
app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));