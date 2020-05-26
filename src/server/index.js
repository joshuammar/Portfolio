const express = require('express');
const os = require('os');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dburi = 'mongodb://172.17.0.2`:27017/portfolio';

// connects our back end code with the database
mongoose.connect(dburi, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
