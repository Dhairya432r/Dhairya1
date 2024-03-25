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

const ConsultSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true
  },
  Disease: {
    type: [String],
    default: true
  },
  Society: {
    type: String,
    default: true
  },
  Flat: {
    type: String,
    default: true
  },
  Street: {
    type: String,
    default: true
  },
  Pin: {
    type: String,
    default: true
  },
  selectedState: {
    type: String,
    default: true
  },
  selectedCity: {
    type: String,
    default: true
  },
  username: {
    type: String,
    default: true
  },
  mobileNumber: {
    type: Number,
    default: true
  },
  type: {
    type: String,
    default: true
  },
  name: {
    type: String,
    default: true
  },
  age: {
    type: String,
    default: true
  },
  weight: {
    type: String,
    default: true
  },
  breed: {
    type: String,
    default: true
  },
  gender: {
    type: String,
    default:true
  },
  aggressive: {
    type: String,
    required: true
  },
  vaccinated: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true
  }
});

const Consult = mongoose.model('Consult', ConsultSchema);

module.exports = Consult;



