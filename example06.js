const jwt = require('jsonwebtoken');

const secret = '123';
const payload = { foo: 'bar' };

//
// gerando o token
//
const token = jwt.sign(payload, secret);
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTgwOTEzODh9.HeMkawu77ryTNDijMU91K6JTdMEp6XokL_QHrGSnYl8

// 
// Returns the payload decoded if the signature is valid
// 
try {
    const decoded = jwt.verify(token, 'wrong-secret');
    console.log(decoded.foo);
    // not displayed
} catch (err) {
    console.log(err.message);
    // invalid signature
}
