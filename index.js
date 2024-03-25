
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require("cors")
const path = require('path');
const petRouter = require('./routes/pet'); // Define your routes in a separate file

mongoose.connect('mongodb+srv://Dhairya:Dhairya432r@cluster0.kad7z2w.mongodb.net/mongo2?retryWrites=true&w=majority');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions)); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use('/api/pets', petRouter);
app.use('/api/gromming',gromming);
app.use('/api/consult',consult);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});





