import express from 'express';

const app = express();

app.use(express.json()); // for reading json added in body of post call.

app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send(`Hello ${req.body.name}!`);
});

app.get('/hello/:name', (req, res) => {
    //const name = req.params.name;
    const { name } = req.params;
    res.send(`Hello ${name}!!`);
});

app.get('/hello/:name/goodbye/:otherName', (req, res) => {
    //const name = req.params.name;
    console.log(req.params);
    const { name } = req.params;
    res.send(`Hello ${name}!!`);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});