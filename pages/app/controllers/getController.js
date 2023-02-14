angular.module('getdataController', ['rentServices'])

.controller('getCtrl', function(Rent, $timeout){
    var app = this;

    Rent.getListings().then(function(data){
        app.errorMsg = false;

        if(data.data.success){
            app.dataregistry = data.data.dataregistry;

            //loading data
            $timeout(3000);

        } else{
            app.errorMsg = data.data.message;
        }
    
    });
});