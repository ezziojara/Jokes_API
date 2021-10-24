const express = require('express');
const app = express();
// const cors = require('cors');
const port = 8080;
require('./server/config/mongoose.config');

// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokesRoutes = require('./server/routes/jokes.routes');





jokesRoutes(app);

app.listen(port, () => console.log('Im listening so cool!'))