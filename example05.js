var jwt = require('jsonwebtoken');


var payload = { foo: 'bar' };
var token = jwt.sign(payload, '123');
console.log(token);


try {
    var decoded = jwt.verify(token, 'wrong-secret');
    console.log(decoded.foo);
} catch (err) {
    console.log(err.message);
}
