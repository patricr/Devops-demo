import collection from 'easter-egg-collection'

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('This is a monkey!');
});

//<iframe src="https://giphy.com/embed/l2R00wfa8fttlpRPG" width="480" height="462" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/easter-happy-egg-l2R00wfa8fttlpRPG">via GIPHY</a></p>

// Port 5000 is the default Dokku application port
app.listen(5000, () => console.log('Listening on port 5000'));