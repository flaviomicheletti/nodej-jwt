const jwt = require('jsonwebtoken');

const secret = '123';
const payload = { foo: 'bar' };

//
// gerando o token
//
const token = jwt.sign(payload, secret);
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTgwOTEyMzl9.pGZ_uqm0zle8WQVyMukm93vf8rrQl8dacuuDBbmupYM

// 
// Returns the payload decoded if the signature is valid
// 
const decoded = jwt.verify(token, secret);
console.log(decoded.foo);
// bar
