var jwt = require('jsonwebtoken');


// var token = jwt.sign();
// var token = jwt.sign({});
// var token = jwt.sign({}, '');
// Error: secretOrPrivateKey must have a value

var token = jwt.sign({}, '1');
console.log(token);
