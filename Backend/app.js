require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing incoming form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Booking schema and model
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Barbershop Booking' });
});

app.post('/book', async (req, res) => {
  try {
    const { name, email, phone, date, time } = req.body;
    const newBooking = new Booking({ name, email, phone, date, time });
    await newBooking.save();
    res.redirect('/success');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving booking');
  }
});

app.get('/success', (req, res) => {
  res.render('success', { title: 'Booking Successful' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
