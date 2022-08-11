const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public/srcJS'));

app.get('/', (req,res)=>{
    res.redirect('index.js');
})


app.listen(process.env.MY_PORT);