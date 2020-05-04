const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
let QueueModel = require('./models/queue');// data schemas for mongodb database
var cors = require('cors');// Import the library:
app.use(cors());// Then use it before your routes are set up:

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = 'mongodb://localhost/queues'; // link for local db

mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));

// the default api route
app.get('/api', function (req, res) {
  res.status(200).send("Welcome to the NATIVE api!");
});

/*
  Route: create
  Type: POST
*/
app.post('/api/create', function(req, res) {
  var { id, position, total } = req.body;
  const theQueue = new QueueModel({ id, position, total });

  // saving the job into the database
  theQueue.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new job please try again.");
    } else {
      console.log(theQueue._id)
      res.status(200).send("Success " + theQueue._id);
    }
  });

 
});
/*
  Route: update
  Type: POST
*/
app.post('/api/update', function(req, res) {
  var { position, total } = req.body;
  QueueModel.updateOne({ _id: "5ead743c1218772fb490d308" }, { $set: { position: position, total : total } }, function (err) {
    if (err) {
      console.log(err);
      console.log('failed to update queue data');
    } else {
      console.log('successfully updated queue data');
      res.status(200).send("Success ");
    }
  });
 
});

/*
  Route: /api/data
  Type: GET
  Description: getting all the jobs data from db
*/
app.get('/api/data', function (req, res) {
  QueueModel.find({ _id: "5ead743c1218772fb490d308"},function (err, queue) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else {
      // console.log(queue);
      res.status(200).send(queue);
    }
  });
});

// listening on this port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});