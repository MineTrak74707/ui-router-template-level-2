angular.module('app')
    .controller('homeCtrl',function($scope, $window){
        $scope.message = 'this is home';
        $scope.inputModel = '';
        $scope.things_todo = [];
$scope.get_todo = function() {
//Get todo items that are stored on the window.localStorage
  var string = $window.localStorage.things_todo;
  $scope.things_todo = string.split(',');
};

$scope.push_todo = function(item) {
  $scope.things_todo.push(item);
  $scope.inputModel = '';
  $scope.keep_todos();
};

$scope.keep_todo = function() {
  $window.localStorage.things_todo = $scope.things_todo;
};

$scope.delete = function() {
//Delete a todo item on the list

$scope.things_todo[index] = $scope.splice(index, 1);
$scope.keep_todos();

};

$scope.edit = function() {
$scope.things_todo[index] = $scope.inputModel;
$scope.keep_todos();

};

$scope.read = function(input) {
  $scope.inputModel = input;

};


});
