const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('yay');
})


app.listen(process.env.MY_PORT);