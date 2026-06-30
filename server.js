/*
      IMPORT SECTION
*/

// Define Express
const express = require('express');

// Define App
const app = express();

// Define Port
const port = 3000;

// Define Path Static Resource 
app.use(express.static('public'));

// Import JSON format for read body request
app.use(express.json());

// Define connection
const connection = require('./database/connection')

// Import Routers
const usersRouters = require('./routers/usersRouters')
const postsRouters = require('./routers/postsRouters')

/*
      END IMPORT SECTION
*/
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*
      CODE SECTION
*/

// Get Home
app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})

// Use Router User
app.use('/users', usersRouters)

// Use Router Post
app.use('/posts', postsRouters)

/*
      CODE SECTION
*/

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Listen Server
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})