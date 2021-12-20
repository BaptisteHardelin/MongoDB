var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

// On créé la base de donnée
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created !");
    db.close();
});