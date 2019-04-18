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


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://p0027:p0027@cluster0-shard-00-00-qpls7.mongodb.net:27017,cluster0-shard-00-01-qpls7.mongodb.net:27017,cluster0-shard-00-02-qpls7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
}


process.env.urldb = urlDB;