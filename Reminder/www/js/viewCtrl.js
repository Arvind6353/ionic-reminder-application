// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

app.controller("viewCtrl",function($scope, $ionicActionSheet,$ionicBackdrop,$timeout,$ionicModal,$rootScope,
 $ionicPlatform, $cordovaLocalNotification,$cordovaToast) {
    
	
	 $scope.$on('$ionicView.loaded', function(){
		
			$scope.reminders=JSON.parse(JSON.stringify(info))
		

  });
	
	
	 $scope.data = {
    showDelete: false
  };
  
	 $scope.data = {
    showReorder: false
  };
	
	
	$scope.reminders=JSON.parse(JSON.stringify(info))
 	
	$scope.deleteReminder=function(reminder){
		
		
		$scope.reminders=JSON.parse(JSON.stringify(info))
		
		var rm=$scope.reminders;
		
		var id=_.findIndex(rm,{id:reminder.id});
		
		$scope.reminders.splice(id,1);
		
		info.splice(id,1);
			
		$cordovaLocalNotification.cancel(id).then(function (result) {

			$cordovaToast
				.show('Reminder Deleted', 'short', 'center')
				.then(function(success) {
				  // success
				}, function (error) {
				  // error
				});
			
		});	
			
			
		localStorage.setItem("rp_data", JSON.stringify(info));
	}
	
	
	$scope.getTodayReminders=function(){
		
		$scope.reminders=JSON.parse(JSON.stringify(info))
		
		var rem=JSON.parse(JSON.stringify($scope.reminders));
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
				
		$scope.reminders=r1;
	}
	
	
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.reminders.splice(fromIndex, 1);
    $scope.reminders.splice(toIndex, 0, item);
  };
  
	
});