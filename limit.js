var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

// On retourne selement 5 document limit(5)
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find().limit(5).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});