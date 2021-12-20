var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

// On trie par ordre alphabétique via le nom (mettre -1 pour changer l'ordre du trie)
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb');
    var mySort = { name: 1 };
    dbo.collection('customers').find().sort(mySort).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});