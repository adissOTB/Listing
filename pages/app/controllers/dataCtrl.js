angular.module('dataController', ['rentServices'])

.controller('dataCon', function($http, $location, $timeout, Rent) {

    var app = this;

    this.dataSubmit = function(subData) {
        app.errorMsg = false;

        //create items on from the client side
        Rent.create(app.subData).then(function(data){
            if(data.data.success){
                app.successMsg = data.data.message + ' ... Redirecting ... Please Wait';

                //redirect to view page
                $timeout(function(){
                    $location.path('/view');
                }, 2000);
                
            }else{
                app.errorMsg = data.data.message;
            }
        });
    };
});


/*

router.get('/dataregistry', function(req, res, next) {
    DataPoints.find(function(err, dataregistry){
        if(err){
            res.sendStatus(404).json({ errmsg: err})
        } else{
            res.json(dataregistry);
        }       
    });
});


*/