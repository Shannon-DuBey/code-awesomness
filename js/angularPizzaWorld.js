(function() {
	var app = angular.module('pizzaWorld', []);

	app.controller('TabController', function(){
	    this.tab = 0;

	    this.setTab = function(newValue){
	      this.tab = newValue;
	    };

	    this.isSet = function(tabName){
	      return this.tab === tabName;
	    };
	});

	app.directive('mainNav', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/mainNav.html'
		};
	});
	app.directive('newYork', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/newYork.html'
		};
	});
	app.directive('chicago', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/chicago.html'
		};
	});
	app.directive('sanFranscisco', function(){
		return {
			restrict: 'E',
			templateUrl: 'angularViews/sanFranscisco.html'
		};
	});

})();