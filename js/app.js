const app = angular.module('MainApp', []);

app.controller('MainController', ['$http', function($http) {

  console.log("app.js is connected");

  this.recordData = (albums);

  console.log(this.recordData);

}]);
