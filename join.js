var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

// Join the matching "products" document(s) to the "orders" collection:
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection('orders').aggregate([
        {
            $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});