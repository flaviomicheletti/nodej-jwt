const lib = require('./example07lib.js');

const payload = { foo: 'bar' };
const secret = 'd41d8cd98f00b204e9800998ecf8427e';

//
// gerando o token
//
const token = lib.sign(payload, secret);

//
// verificando com sucesso
//
const decodedSucess = lib.verify(token, secret);
console.log("ok :", decodedSucess);
// ok : { foo: 'bar', iat: 1592506099 }

//
// verificando com falha
//
const decodedFailed = lib.verify(token, "wrong-secret");
console.log(decodedFailed);
// invalid signature
