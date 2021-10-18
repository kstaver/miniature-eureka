const PORT = process.env.PORT || 3001; // Make 3001 the port to the api server
const express = require('express'); // Added because express is an npm package

const app = express();

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

