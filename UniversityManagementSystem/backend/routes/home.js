const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home'); // Rendering home.ejs
});

module.exports = router;
