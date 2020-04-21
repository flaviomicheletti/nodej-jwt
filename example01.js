var utils = require('util');

var jwt   = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token);
console.log(utils.inspect(jwt));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODcxNTI4MzN9.1MJPeOK6gFBT8utaE0qQntLFG7hIon6DrFmiOjIo6gE
// {
//   decode: [Function (anonymous)],
//   verify: [Function (anonymous)],
//   sign: [Function (anonymous)],
//   JsonWebTokenError: [Function: JsonWebTokenError],
//   NotBeforeError: [Function: NotBeforeError],
//   TokenExpiredError: [Function: TokenExpiredError]
// }
