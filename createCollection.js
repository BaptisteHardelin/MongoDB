var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";


// On créé une collection
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb');
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created !");
        db.close();
    });
});