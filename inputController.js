var app = angular.module("routerApp");

app.controller("inputController", function($scope, appService, $location){
	$scope.getPalindrome = function(){
		appService.palindromeReveal($scope.checkPalindrome);
		$location.path("/output");
	};
});

