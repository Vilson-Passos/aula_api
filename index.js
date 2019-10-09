console.log("ola")
const express = require('express');

const app = express();

//app.get('/usuarios', function() { ==> Pode ser assim tb com function
app.get('/usuarios', (request, response, next) => {
    console.log(request.query.id);
    

    response.status=200
        .json({success: true})
        //.sendStatus(200);
        
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

