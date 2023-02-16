angular.module('rentServices', [])

.factory('Rent', function($http){
    rentFactory = {};
    
    //Rent.create(subData)
    rentFactory.create = function(subData) {
        return $http.post('/api/dataregistry', subData);
    };

    //Rent.find()
    rentFactory.getListings = function() {
        return $http.get('/api/dataregistry/');
    };

    rentFactory.deleteList = function(_id){
        return $http.delete('/api/dataregistry/' + _id);
    };

    return rentFactory;
});