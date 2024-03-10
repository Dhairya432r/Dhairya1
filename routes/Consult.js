const express = require('express');
const router3 = express.Router();
const Consult = require('../models/User3');
const cors = require('cors');

//hello
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
router3.use(cors(corsOptions)); 
router3.get('/', async (req, res) => {
    try {
      const petss = await Consult.find(); // Retrieve all pets from the database
      // const grommings = await Gromming.find();
      res.status(200).json(petss);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router3.post('/',async(req,res)=> {
    try{
      const {service,Disease,Society,Flat,Street,Pin,selectedState,selectedCity,type,name,age,weight,breed,gender,aggressive,vaccinated,date,time,Price } = req.body;
      const consult = new Consult({service,Disease,Society,Flat,Street,Pin,selectedState,selectedCity,type,name,age,weight,breed,gender,aggressive,vaccinated,date,time,Price});
      await consult.save();
      res.status(201).json({message:"successfully"});
  
  
    }catch(error){
      res.status(500).json({error:error.message});
    }
  })
  module.exports = router3;