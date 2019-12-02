const mongoose = require('mongoose');

/*
db.inclass.insertOne(
	{
		"realname": "Joe Smith",
		"clienttype": "PILOT",
		"planned_depairport" : "KMIA",
		"planned_destairport" : "KPHX",
		"altitude": "10000"
	}
);
*/
var clientSchema = new mongoose.Schema(
    { 
        realname: 'string', 
        clienttype: 'string', 
        planned_depairport: 'string', 
        planned_destairport: 'string',
        altitude: 'number',        
    }
);


var Client = mongoose.model('Client', clientSchema);