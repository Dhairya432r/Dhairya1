const express = require('express');
const router = express.Router();
const multer = require('multer');
const Gromming = require('../models/User2');
const Pet = require('../models/User');
const cors = require('cors');

//hello
const corsOptions = {
  origin: 'https://dhairya432r.github.io',
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
      // const grommings = await Gromming.find();
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

  // Update pet by ID route
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const petId = req.params.id;
    const { name, age, gender, username, mobileNumber, vaccinated, spray, shot, dog, cat, kid, detail, state, city } = req.body;
    const imageUrl = req.file ? req.file.path : undefined; // Check if there's a new image uploaded

    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { name, age, gender, username, mobileNumber, vaccinated, spray, shot, dog, cat, kid, detail, imageUrl, state, city },
      { new: true } // Return the updated document
    );

    if (!updatedPet) {
      return res.status(404).json({ error: 'Pet not found' });
    }

    res.status(200).json({ message: 'Pet updated successfully', pet: updatedPet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
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

// router.post('/',async(req,res)=> {
//   try{
//     const { type,name,gender,size,aggressive,old,date,time } = req.body;
//     const gromming = new Gromming({ type,name,gender,size,aggressive,old,date,time});
//     await gromming.save();
//     res.status(201).json({message:"successfully"});


//   }catch(error){
//     res.status(500).json({error:error.message});
//   }
// })

// Delete a pet by ID
router.delete('/:id', async (req, res) => {
  const petId = req.params.id;
  console.log('Deleting pet with ID:', petId);

  try {
    const deletedPet = await Pet.findByIdAndDelete(petId);

    if (!deletedPet) {
      return res.status(404).json({ error: 'Pet not found' });
    }

    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { mobileNumber } = req.headers;
    
    if (!mobileNumber) {
      return res.status(400).json({ error: 'Mobile number is required' });
    }

    const pets = await Pet.find({ mobileNumber });
    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
