var plivo = require('plivo');
var path = require('path');

const config = require(path.resolve('.', 'config/credentials.js'));

(function main() {
    'use strict';

    var client = new plivo.Client(config.APP_ID,config.APP_TOKEN);
    client.calls.create(
        "+14151234567", // from
        "+14157654321", // to
        "http://s3.amazonaws.com/static.plivo.com/answer.xml", // answer url
        {
            answerMethod: "GET",
            time_limit: 100
        },
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();