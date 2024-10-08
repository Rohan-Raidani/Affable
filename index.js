const express = require('express');
const app = express();
const port = 8000;

// express router
app.use('/',require('./routes/index'))

// setup the view engine
app.set('view engine','ejs');
app.set('views','./views')

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port ${port}`); 
});