angular.module('cancelController', ['rentServices'])

.controller('deletCtrl', function(Rent) {
    var app = this;

    this.deleteData() = function(_id){
        app.errorMsg = false;

        Rent.remove().then(function(data){
            if(data.data.success){
                app.successMsg = data.data.message + confirm('Listing Deleted Successfully!!');

            } else {
                app.errorMsg = data.data.message;
            }
        });
    };

}); 