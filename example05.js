const jwt = require('jsonwebtoken');

const secret = '123';
const payload = { foo: 'bar' };

//
// gerando o token
//
const token = jwt.sign(payload, secret);
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTgwOTEyOTZ9.a5Wzo6V-tyq4r1i2gRGB2mfzZkYuARZlKYfeKU5zxHk

// 
// Returns the payload decoded if the signature is valid
// 
const decoded = jwt.verify(token, 'wrong-secret');
console.log(decoded.foo);
// Error: JsonWebTokenError: invalid signature
