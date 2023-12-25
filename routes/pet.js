const express = require('express');
const router = express.Router();
const multer = require('multer');
const Pet = require('../models/User');
const cors = require('cors')
//hello
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
router.use(cors(corsOptions)); 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.get('/', async (req, res) => {
    try {
      const pets = await Pet.find(); // Retrieve all pets from the database
      res.status(200).json(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/:id', async (req, res) => {
    const petId = req.params.id;
    console.log('Fetching pet with ID:', petId);
  
    try {
      const pet = await Pet.findById(petId);
  
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found' });
      }
  
      res.json(pet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, age,gender,username,mobileNumber ,vaccinated ,spray,shot,dog,cat,kid,detail,state, city } = req.body;
    const imageUrl = req.file.path; // Multer saves the file to the 'uploads' directory

    const pet = new Pet({ name, age, gender,username,mobileNumber,vaccinated,spray,shot,dog,cat,kid,detail, imageUrl,state, city });
    await pet.save();

    res.status(201).json({ message: 'Pet added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
