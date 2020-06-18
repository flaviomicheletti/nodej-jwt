var lib = require('./example07lib.js');

//
// secret (enviroment)
// 
process.env.SECRET = '123';

//
// dados para gerar token
//
let params = {
    payload: {foo: 'bar'},
    secret: process.env.SECRET
}

//
// gerando o token
//
let token = lib.sign(params.payload, params.secret);

//
// verificando com sucesso
//
let decodedSucess = lib.verify(token, process.env.SECRET);
console.log("ok :", decodedSucess);
// ok : { foo: 'bar', iat: 1592506099 }

//
// verificando com falha
//
let decodedFailed = lib.verify(token, "wrong-secret");
console.log("neg: " + decodedFailed);
// neg: invalid signature
