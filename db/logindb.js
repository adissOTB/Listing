var mongoose = require("mongoose");
var LoginSchema = mongoose.Schema;

var loginSchema = LoginSchema({

    email: { type: String,
        required: true,
        unique: true
    },
    
    password: { type: String, 
        required: true
    }
});

module.exports = mongoose.model('Users', loginSchema);