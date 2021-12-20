var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb');
    var query = { address: 'Montain 21' };
    dbo.collection('customers').deleteOne(query, function (err, res) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    })
});