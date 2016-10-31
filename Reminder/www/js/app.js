
var info = null;


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform,$rootScope	, $timeout,$cordovaLocalNotification) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
   /*if(!localStorage.getItem("rp_data"))
	{
	  var d=[];
	  var rp_data = {data: {}};
	  d.push(rp_data);
	  localStorage.setItem("rp_data", JSON.stringify(d));
	}
*/
	info = JSON.parse(localStorage.getItem("rp_data"));
	
	$rootScope.$on("$cordovaLocalNotification:click", function(notification, state) {
		
			window.location.href = "#/viewTodayReminder";
	});
	
     /*$rootScope.$on('$cordovaLocalNotification:trigger',
    function (event, notification, state) {
      // ...
	  
		
	if(notification.id ==9999 || notification.id=="9999"){
  
		
		$timeout(function () {
	
	
	
	  
	var rem=JSON.parse(JSON.stringify(info))
 	var r1={},count=0;
	if(rem){
		 r1=rem.filter(function(r){ 
				var a = moment(new Date(r.time), 'DD/MM/YYYY');
				var b = moment(new Date(), 'DD/MM/YYYY');
				var days = b. diff(a, 'days');
				if(days==0)
					return r;
			
			
		})
	}
	if(r1 && r1.length)
		count=r1.length;
	else 
		count=0;
	
			$cordovaLocalNotification.schedule({
					id: 9999,
					title: "Good Morning "+localStorage.getItem("name")+" :)",
					text:"You have "+count+" reminders for today"
			});
        },3600000);
	}
	  
    }); 
  */
  
})
app.config(function($stateProvider,$urlRouterProvider) {
   $stateProvider
   .state('home', { url: '/', templateUrl: 'templates/home.html',controller: 'homeCtrl',cache: false})
   .state('addReminder', {url: '/addReminder', templateUrl: 'templates/addReminder.html',controller: 'addCtrl',cache: false})
   .state('viewAllReminder', {url: '/viewAllReminder', templateUrl: 'templates/viewAllReminder.html',controller: 'viewCtrl',cache: false})
   .state('viewTodayReminder', {url: '/viewTodayReminder', templateUrl: 'templates/viewTodayReminder.html',controller: 'viewCtrl',cache: false})

   
  
  $urlRouterProvider.otherwise('/');
  
  });