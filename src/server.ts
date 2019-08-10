import * as bodyParser from 'body-parser';
import express from 'express';
import * as path from 'path';

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function() {
    console.log("Started on port 3000");
});

app.post('/', function(req,res){
    // Print all properties on request body:
    console.log(req.body);

    // Print specific properties:
    // const propertyNames = ['lti_message_type', 'lti_version'];
    // propertyNames.forEach(propertyName => {
    //     console.log(propertyName + ": " + req.body[propertyName]);
    // });

    res.sendFile(path.join(__dirname, '../public/index.html'));
});