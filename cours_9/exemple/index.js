const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
