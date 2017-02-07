function MainController($scope) {
  $scope.name = "mike"
  $scope.email = 'mikerand@gmail.com'
  $scope.phone = '4072525275'
}


angular
  .module('app')
  .controller('MainController', MainController)
