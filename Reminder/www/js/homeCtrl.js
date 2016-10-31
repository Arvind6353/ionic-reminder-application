// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

app.controller("homeCtrl",function($scope, $ionicActionSheet,$ionicBackdrop,$timeout,$ionicModal,$rootScope,
 $ionicPlatform, $cordovaLocalNotification,$cordovaToast,$state,$ionicPopup) {
    
				 $scope.userName=localStorage.getItem('name');
	
	var rem=$scope.reminders=JSON.parse(JSON.stringify(info))
 	var r1={};
	if(rem){
		 r1=rem.filter(function(r){ 
				
				
				var a1=moment(new Date(r.time)).date();
				var b1= moment().date();
				
				var days=b1-a1;
				
				if(days==0)
					return r;
			
			
		})
	}
	if(r1 && r1.length)
		$scope.todayCount=r1.length;
	else 
		$scope.todayCount=0;
	
	 
	 
	 if(!localStorage.getItem('name')){
	 
			  var promptPopup = $ionicPopup.prompt({
				 title: 'Title',
				 template: 'Your Name',
				 inputType: 'text',
				 inputPlaceholder: 'Placeholder'
			  });
				
			  promptPopup.then(function(res) {
				 console.log(res);
				 localStorage.setItem('name',res);
				 $scope.userName=res;
				 
						var da=new Date();
						if(da.getHours()<=7){
							da.setHours(7);
						}
						else{
							da.setDate(da.getDate()+1)
							da.setHours(7);
						}
							da.setMinutes(30);
							da.setSeconds(0);
								
				  $cordovaLocalNotification.schedule({
					id: 9999,
					title: "Good Morning "+res+" :)",
					text:"Click to check for reminders",
					firstAt: da,
					every:"day",
					sound:"file://bgm.mp3"
				  }).then(function (result) {
							
				  });
				 
			  });
				
		   };
 
	
});