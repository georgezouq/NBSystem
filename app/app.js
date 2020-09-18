/**
* create by GeorgeZou 
*/
var App = angular.module('App',[
	'ngRoute',
	'IndexControllers'
])

App.config(['$routeProvider'],
	function($routeProvider){
		routeProvider.
			when('/index',{
				templateUrl : 'static/layouts/index.html',
				controller:'IndexController'
			})
});