///////////////////////////
//// Puerto////////
/////////////////

process.env.PORT = process.env.PORT || 3000;

/////////////////////////////////////
//// Vencimiento del token///////
///////////////////////////////

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/////////////////////////////////////
//// Seeb de autentication///////
///////////////////////////////

process.env.SEED_TOKEN = 'Token-desarrollo';

///////////////////////////
//// Entorno/////////
////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

///////////////////////////
//// Base de datos////
////////////////////


//////

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://p0027:p0027@cluster0-qpls7.mongodb.net/test?retryWrites=true';
}


process.env.URLDB = urlDB;