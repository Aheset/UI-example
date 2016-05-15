var app = angular.module("routerApp");

app.controller("outputController", function($scope, appService){
	$scope.word = appService.getPalindrome();

});