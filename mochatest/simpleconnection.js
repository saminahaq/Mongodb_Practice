const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

    // Connect to mongodb "testmongodb" is not exist and it will create on run time
    mongoose.connect('mongodb://localhost/testmongodb');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');

    }).on('error', function(error){
        console.log('Connection error:', error);
    });

