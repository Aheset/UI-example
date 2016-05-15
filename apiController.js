var app=angular.module("routerApp");

app.controller("apiController", function($scope, randomQuoteService, $location){
	$scope.getRandomQuotes = function(){
		randomQuoteService.chooseRandomQuote($scope.wiseQuotes);
		$location.path("partials/api.html")
	}

})
