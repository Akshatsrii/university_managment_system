const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages');

// Serve static files from /public
app.use(express.static(path.join(__dirname, '../public')));

// Example route
app.get('/', (req, res) => {
  res.render('home'); // Make sure you have a file src/views/index.ejs
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
