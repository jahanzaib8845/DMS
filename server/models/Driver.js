const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnic: { type: String, required: true },
  city: { type: String, required: true },
  carType: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);
