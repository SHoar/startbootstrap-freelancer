const express = require('express')
const favicon = require('favicon')
const app  = express();
const PORT = (3000 )

app.use(express.static('public'));


app.get('/', (req,res,next) => {
    res.render('public/index');
});

app.listen( PORT , () => {
    console.log('Static Page is running on Port '+ PORT +'.');
});
