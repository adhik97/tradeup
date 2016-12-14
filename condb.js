var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");

var membersSchema = mongoose.Schema({

    username : String, 
    password : String,
    firstname : String,
    lastname : String,
    year : Number,
    chapter : String
});

var eventsSchema = mongoose.Schema({

    title : String,
    description : String, 
    postedBy : String,
    date : String,
    time : String,
    chapter : String
});

var meetingsSchema = mongoose.Schema({

    place : String, 
    date : String,
    time : String,
    postedBy : String,
    chapter : String
});

var projectsSchema = mongoose.Schema({

    date : String,
    postedBy : String,
    chapter : String
});


var membersTable = mongoose.model('members', membersSchema);
var eventsTable = mongoose.model('events', eventsSchema);
var meetingsTable = mongoose.model('meetings', meetingsSchema);
var projectsTable = mongoose.model('projects', projectsSchema);


module.exports.membersTable = membersTable;
module.exports.eventsTable = eventsTable;
module.exports.meetingsTable = meetingsTable;
module.exports.projectsTable = projectsTable;

