const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

// Serve CSS from /styles route
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Home route
app.get('/', (req, res) => {
  res.render('home');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
