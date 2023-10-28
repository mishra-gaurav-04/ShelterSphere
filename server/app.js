const express =  require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const createError = require('http-errors');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
