var jwt = require('jsonwebtoken');


//
// secret
// 
var secret = '1';

// 
// Returns the JsonWebToken as string
// 
var payload = {foo: 'bar'};
var token = jwt.sign(payload, secret);
console.log(token);

// 
// Returns the payload decoded if the signature is valid
// 
var decoded = jwt.verify(token, secret);
console.log(decoded.foo);
