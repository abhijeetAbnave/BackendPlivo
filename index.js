var express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

var path = require('path')

var controller = require(path.resolve('.', 'controllers/makeCall.js'));



app.post('/plivio/callAPI', controller.validateRequest, controller.postRequest);

app.listen(port, function () {
    console.log("API server started on: ", port);
});


