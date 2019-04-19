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

process.env.SEED = process.env.SEED || 'Seeb-desarrollo';


///////////////////////////
//// Entorno/////////
////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

///////////////////////////
//// Base de datos////
////////////////////



let urlDB;

<<<<<<< HEAD

urlDB = 'mongodb://p0027:p0027@cluster0-shard-00-00-qpls7.mongodb.net:27017,cluster0-shard-00-01-qpls7.mongodb.net:27017,cluster0-shard-00-02-qpls7.mongodb.net:27017/test?ssl=true';

=======
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // urlDB = 'mongodb+srv://p0027:p0027@cluster0-qpls7.mongodb.net/test?retryWrites=true';
    urlDB = process.env.MONGO_URI;
}
>>>>>>> 23b4a6baac00913c404000cbf02d287d9e5c4a67


process.env.URLDB = urlDB;