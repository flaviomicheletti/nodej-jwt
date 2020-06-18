var jwt = require('jsonwebtoken');

//
// sign
//
module.exports.sign = function (payload, secret, expiresIn) {
    if (expiresIn) {
        return jwt.sign(payload, secret, expiresIn);
    }
    return jwt.sign(payload, secret);
}

//
// verify
//
module.exports.verify = function (token, secret) {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return err.message;
    }
}

// https://medium.com/trainingcenter/entendendo-m%C3%B3dulos-no-javascript-73bce1d64dbf