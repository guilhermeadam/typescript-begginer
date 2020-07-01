import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.json([
        'Adam',
        'Adam',
        'Adam',
        'Adam',
    ]);
});

app.listen(3333);