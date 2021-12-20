var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: "Minnie" } };
    dbo.collection("customers").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res.upsertedCount + " document(s) updated");
        db.close();
    });
});