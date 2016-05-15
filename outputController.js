var app = angular.module("ourApp");

app.controller("outputController", function($scope, appService){
	$scope.word = appService.getPalindrome();

});