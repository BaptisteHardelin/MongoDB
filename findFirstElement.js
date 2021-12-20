var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

//Retrouver le premier element de notre collection
mongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function (err, res) {
        if (err) throw err;
        console.log(res.name);
        db.close();
    });
})