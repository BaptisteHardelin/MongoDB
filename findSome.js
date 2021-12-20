var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection('customers').find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })
});