var mongoose = require("mongoose");
var DataSchema = mongoose.Schema;

var dataSchema = DataSchema({

    plateNumber: { type: String,
        length: 7,
        required: true,
        unique: true
    },
    
    taxiName: { type: String, 
        required: true,
    },

    startingDate: { type: String,
        required: true
    },

    completionDate: { type: String,
        required: true
    }, 

    contactNumber: { type: Number, 
        length: 10,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Dataregistry', dataSchema);

