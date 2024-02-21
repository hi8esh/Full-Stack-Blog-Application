import express from 'express';

const app = express();

app.use(express.json()); // for reading json added in body of post call.

app.get('/hello', (req, res) => {
    res.send('Hello! Get');
});

app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send(`Hello ${req.body.name}!`);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});