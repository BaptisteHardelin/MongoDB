var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb');
    var query = { address: 'Canyon 123' };
    // var query2 = { address: /^S/ }
    dbo.collection('customers').find(query).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});