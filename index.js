
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs');
});


// Port 5000 is the default Dokku application port
app.listen(5000, () => console.log('Listening on port 5000'));

// const collection = require('easter-egg-collection');
// const app2 = collection();