const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages');


app.use('/styles', express.static(path.join(__dirname, 'styles')));



app.get('/', (req, res) => {
  res.render('home'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
