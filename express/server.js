/*
 * Title: NATIVE API Script
 * author: @realjema
 * date: 11/07/2020
 * description: NATIVE api script containing the informations fetching routes for all the projects on the main website [naite237.com]
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');

// data schemas
const Finder = require("./models/finder_post");

// Import the library:
var cors = require('cors');

const app = express();

// Then use it before your routes are set up:
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// local database
const mongo_uri = 'mongodb://localhost/nativedb';

mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_uri}`);
    }
  }
);

app.use(express.static(path.join(__dirname, 'public')));

/* * * * * * * * * * * * * * * * * * * * * * * * *
 *                    ROUTES                     *
 * * * * * * * * * * * * * * * * * * * * * * * * */

/*
  Route: /native/api
  Type: GET
  Description: Default route displaying information about api
*/
app.get('/native/api', function (req, res) {
  res.status(200).send("Welcome to the NATIVE api!");
});

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * project: Finder
 * route: /finder
 * description: these are the routes for the finder project
 * * * * * * * * * * * * * * * * * * * * * * * * */
/*
  Route: /native/api/finder/data
  Type: GET
  Description: get the data for the finder project
*/
app.get('/native/api/finder/data', function (req, res) {
  Finder.find(function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the posts fetch from the database
      console.log('got here')
      res.status(200).send(posts);
    }
  });
});

/* * * * * * * * * * * * * * * * * * * * * * * * *
*  end: Finder Routes
* * * * * * * * * * * * * * * * * * * * * * * * */
// listening on this port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
