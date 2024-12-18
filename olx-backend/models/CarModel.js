const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    enum: ['Maruti Suzuki', 'Hyundai', 'Tata'],
  },
  year: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
    enum: ['Petrol', 'Diesel', 'Electric'],
  },
  images: {
    type: [String],
    required: true,
  },
  transmission: {
    type: String,
    required: true,
    enum: ['Manual', 'Automatic'],
  },
  km_driven: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ad_title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
