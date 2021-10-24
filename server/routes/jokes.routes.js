const {getAllJokes, getOneJoke, createJoke, UpdateJoke, deleteJoke} = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes',getAllJokes);
    app.get('/api/jokes/:id',getOneJoke);
    app.post('/api/jokes/new',createJoke);
    app.put('/api/jokes/update/:id',UpdateJoke);
    app.delete('/api/jokes/delete/:id',deleteJoke);
}