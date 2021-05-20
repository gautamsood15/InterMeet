const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');   // Importing specific version of uuid
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {               // When we goto  root, it generates a uuid and redirects us to the uuid link 
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})


server.listen(3030);


