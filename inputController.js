var app = angular.module("ourApp");

app.controller("inputController", function($scope, appService, $location){
	$scope.getPalindrome = function(){
		appService.palindromeReveal($scope.checkPalindrome);
		$location.path("/output");
	};
});

