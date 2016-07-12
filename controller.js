angular
    .module('userProfiles')
    .controller('MainController', function($scope, mainService){

    $scope.getUsers = function() {
        $scope.users = mainService.getUsers();
    } 
    
    
    
    // $scope.users = mainService.getUsers();


  

// we important the service information via a function created there, so that the heavy lifting 
// is done in the service and the result is imported into the controller
// what is $scope.users doing?
// $scope.getUsers is the vehicle for the service material to get to the view, but it is 
// dormant until activated by something, and that something exists in within the function
// as a variable equal to a function. Now, when that variable is invoked in the view, 
// it activates the parent function that then activates the service function.

    $scope.getUsers();
    // here we call the function declared above so that it becomes efficacious

    $scope.toggleFavorite = mainService.toggleFavorite;
    // what's happening here?
   
})

