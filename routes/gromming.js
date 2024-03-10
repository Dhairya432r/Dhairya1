const express = require('express');
const router2 = express.Router();
const Gromming = require('../models/User2');
const cors = require('cors');

//hello
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
router2.use(cors(corsOptions)); 
router2.get('/', async (req, res) => {
    try {
      const petss = await Gromming.find(); // Retrieve all pets from the database
      // const grommings = await Gromming.find();
      res.status(200).json(petss);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router2.post('/',async(req,res)=> {
    try{
      const { type,name,gender,size,old,aggressive,date,time } = req.body;
      const gromming = new Gromming({ type,name,gender,size,old,aggressive,date,time});
      await gromming.save();
      console.log(gromming)
      if(!gromming){
        return res.json({ error: "error occured" });
      }
      res.status(201).json({message:"successfully"});
  
  
    }catch(error){
      res.status(500).json({error:error.message});
    }
  })
  module.exports = router2;