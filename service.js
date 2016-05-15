var app = angular.module("ourApp");

app.factory("appService", function(){
	var str = "";
	function getPalindrome(){
		var revPalindrome = str.toLowerCase("").split("").reverse().join("");
		if (str === revPalindrome){
			return true;
		}
		else {
			return false;
		}
	}

	return {
		palindromeReveal: function(word){
			str = word
		},
		getPalindrome: getPalindrome
	};
});