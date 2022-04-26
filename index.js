require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');
const app = express();

const port = process.env.PORT || 5000;

connectToDatabase();
app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`App running port ${port}`));