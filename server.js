const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
// Путь к директории в Docker volume
const cloudsDir = process.env.CLOUDS_DIR || '/app/Clouds';


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'Clouds')));
app.use('/clouds', express.static(cloudsDir));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/evstig', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'evstig.html'));
});

app.get('/gorod', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'gorod.html'));
});

app.get('/goat', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'goat.html'));
});

app.get('/pocht', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'pocht.html'));
});

app.get('/polovoy', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'polovoy.html'));
});

app.get('/reader', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'reader.html'));
});

app.get('/seller', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'seller.html'));
});

app.get('/skrip', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'skrip.html'));
});

app.get('/traktir', (req, res) => {
  res.sendFile(path.join(cloudsDir, 'traktir.html'));
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});