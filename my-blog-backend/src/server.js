import express from 'express';

let articlesInfo = [{
                    name: 'learn-react',
                    upvotes: 0,
                },
                {
                    name: 'learn-node',
                    upvotes: 0,
                },
                {
                    name: 'mongodb',
                    upvotes: 0,
                }]

const app = express();

app.use(express.json()); // for reading json added in body of post call.

// app.post('/hello', (req, res) => {
//     console.log(req.body);
//     res.send(`Hello ${req.body.name}!`);
// });

// app.get('/hello/:name', (req, res) => {
//     //const name = req.params.name;
//     const { name } = req.params;
//     res.send(`Hello ${name}!!`);
// });

// app.get('/hello/:name/goodbye/:otherName', (req, res) => {
//     //const name = req.params.name;
//     console.log(req.params);
//     const { name } = req.params;
//     res.send(`Hello ${name}!!`);
// });

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if(article){
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    }
    else{
        res.send('That article doesn\'t exist');
    }

});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});