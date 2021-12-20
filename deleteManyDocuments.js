var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^H/ };
    dbo.collection("customers").deleteMany(myquery, function (err, res) {
        if (err) throw err;
        console.log(res.acknowledged + " document(s) deleted " + res.deletedCount);
        db.close();
    });
});