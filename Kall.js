const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/appointment-center', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple schema
const appointmentSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/signup', async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).send('Please fill in all fields.');
  }

  const newAppointment = new Appointment({ name, username, password });

  try {
    await newAppointment.save();
    res.redirect('/success.html');
  } catch (error) {
    res.status(500).send('Error creating appointment.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
