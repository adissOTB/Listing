angular.module('AuthServices', [])

.factory('Login', function($http){
    rentFactory = {};
    
    //Login.create(subData)
    loginFactory.create = function(subData) {
        return $http.post('/api/users', subData);
    };

    return loginFactory;
});