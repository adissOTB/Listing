var express = require('express');
var DataPoints = require('../db/mongoose');
var router = express.Router();

//adding data
router.post('/dataregistry', function(req, res) {

    let plateNumber = req.body.plateNumber;
    let taxiName = req.body.taxiName;
    let startingDate = req.body.startingDate;
    let completionDate = req.body.completionDate;
    let contactNumber = req.body.contactNumber;

    let newDatapoint = new DataPoints({
        plateNumber, taxiName, startingDate, completionDate, contactNumber
    });

    if(req.body.plateNumber == "null" || req.body.plateNumber == ''){
        res.json({success: false, message: 'Please provide your Plate Number'});
    } else if(req.body.taxiName == "null" || req.body.taxiName == ''){
        res.json({success: false, message: 'Vehicle Brand required'});
    } else if(req.body.startingDate == "null" || req.body.startingDate == ''){
        res.json({success: false, message: 'Provide full Starting Date'});
    } else if(req.body.completionDate == "null" || req.body.completionDate == ''){
        res.json({success: false, message: 'Provide full Completion Date'});
    } else if(req.body.contactNumber == "null" || req.body.contactNumber == ''){
        res.json({success: false, message: 'Please Enter your Phone Number'});
    } else{
        newDatapoint.save(function(err) {
            if(err){
                res.json({success: false, message: 'Make Sure You Place a Listing'});
            } else{
                res.json({success: true, message: 'Your Listing has been placed'});
            }
        });
    }
});

//retrieving data
router.get('/dataregistry', function(req, res) {
    DataPoints.find({}, function(err, dataregistry){
        if(err){
            res.sendStatus(404).json({ errmsg: err})
        } else{
            res.json({success: true, dataregistry: dataregistry});
            
        }       
    });
});

//deleting data
router.delete('/dataregistry/:id', function(req, res, next){
    DataPoints.findOneAndRemove({id: req.params._id}, function(err, result){
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});

//updating data
router.patch('/dataregistry/:id', function(req, res, next){
    //updating
    DataPoints.findOneAndUpdate({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});

module.exports = router;