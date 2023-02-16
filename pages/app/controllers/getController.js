angular.module('getdataController', ['rentServices'])

.controller('getCtrl', function(Rent, $timeout){
    var app = this;
    
    app.limit = 10;



    Rent.getListings().then(function(data){
        app.errorMsg = false;

        if(data.data.success){
            app.dataregistry = data.data.dataregistry;

            //loading data
            $timeout(4000);

        } else{
            app.errorMsg = data.data.message;
        }
    
    });

    app.showAll = function(){
        var limit = 5;
        if(limit <= 0){
            confirm('The record is empty');
        } else {
            app.limit = undefined;
        }    
    };

    app.showLess = function(limit){
        app.limit = 5;
    };

    app.deleteData = function(id){
        app.errorMsg = false;

        Rent.deleteList(id).then(function(data){
            if(data.data.success){
                //app.successMsg = data.data.message;
                confirm('Listing Deleted Successfully!!');

            } else {
                app.errorMsg = data.data.message;
            }
        });
    };
});