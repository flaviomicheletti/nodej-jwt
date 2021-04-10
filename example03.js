const jwt = require('jsonwebtoken');

// const token = jwt.sign();
// const token = jwt.sign({});
// const token = jwt.sign({}, '');
// Error: secretOrPrivateKey must have a value

const token = jwt.sign({}, '1');
console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTgwOTExNzl9.hVOjufx8nX7EhxryI-DOy6UH0C_l3vv6r_z8TsPDir0