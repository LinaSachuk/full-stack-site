import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send('Sending back Hello!'))

app.listen(8000, () => console.log('Listening on port 8000'));