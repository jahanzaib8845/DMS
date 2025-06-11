const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');

router.post('/register', async (req, res) => {
  try {
    const { name, cnic, city, carType } = req.body;
    const driver = new Driver({ name, cnic, city, carType });
    await driver.save();
    res.status(201).json({ message: 'Driver registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed', details: error.message });
  }
});

module.exports = router;
