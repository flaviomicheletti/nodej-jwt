var jwt = require('jsonwebtoken');

//
// secret
// 
var secret = '123';

// 
// Returns the JsonWebToken as string
// 
var payload = {foo: 'bar'};
var token = jwt.sign(payload, secret);
// console.log(token);

// 
// Returns the payload decoded if the signature is valid
// 
try {
    var decoded = jwt.verify(token, 'wrong-secret');
    // console.log(decoded.foo);
} catch (err) {
    // console.log(err.message);
}
