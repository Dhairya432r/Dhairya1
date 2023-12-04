// const mongoose = require('mongoose');

// const petSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   vaccinated: Boolean,
//   imageUrl: String,
// });

// const Pet = mongoose.model('Pet', petSchema);

// module.exports = Pet;

const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    default: true
  },
  gender: {
    type: String,
    default: true
  },
  vaccinated: {
    type: String,
    default: true
  },
  spray: {
    type: String,
    default: true
  },
  shot: {
    type: String,
    default: true
  },
  dog: {
    type: String,
    default: true
  },
  cat: {
    type: String,
    default: true
  },
  kid: {
    type: String,
    default: true
  },
  detail: {
    type: String,
    default: true
 },
  username:{
    type: String,
    default: true
  },
  mobileNumber: {
    type: Number,
    default:true
  },
  imageUrl: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;



