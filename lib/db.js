var $data = require('jaydata');

var db = function () {
    $data.Class.define('db', $data.EntityContext, null, {
        //insert types here
        //Users: {type: $data.EntitySet, elementType: user}
    });
    return new db({
        name: 'mongoDB',
        databaseName: 'store-main', 
        address: 'localhost',
        port: 27017
    });
};
module.exports = db();