var plivo = require("plivo");
var path = require("path");

const config = require(path.resolve(".", "config/credentials.js"));

function requestVerifier(req, res, next) {
  console.log("Request verifier got called ");
  next();
}

var postRequest = function (req, res) {
  console.log("post request got called ", req);

  try {
    var client = new plivo.Client(config.APP_ID, config.APP_TOKEN);
    client.calls
      .create(
        req.body.from, // from
        req.body.to, // to
        "http://s3.amazonaws.com/static.plivo.com/answer.xml", // answer url
        {
          answerMethod: "GET",
          time_limit: req.body.time,
        }
      )
      .then(
        function (response) {
          console.log(response);
          res.send(response);
        },
        function (err) {
          console.error(err);
          res.send(err);
        }
      );
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

module.exports = {
  validateRequest: requestVerifier,
  postRequest: postRequest,
};
