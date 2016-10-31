// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

app.controller("addCtrl",function($scope, $ionicActionSheet,$ionicBackdrop,$timeout,$ionicModal,$rootScope,
 $ionicPlatform, $cordovaLocalNotification,$cordovaToast) {
    
	 $scope.$on('$ionicView.loaded', function(){
		
			$scope.reminder={
				
				title:"",
				message:"",
				date:"",
				time:"",
				repeat:""
				
			}


				$scope.repeatList=[
					
					{
						value:"0",text:"None"
						
					},
					{
						value:"minute",text:"Minute"
						
					},
						{
						value:"hour",text:"Hour"
						
					},
						{
						value:"day",text:"Day"
						
					},
						{
						value:"week",text:"Week"
						
					},
					{
						value:"month",text:"Month"
						
					},
					{
						value:"year",text:"Year"
						
					}
					
					
				]
				$scope.reminder.repeat=$scope.repeatList[0].value



	});
	
	
	

	
	
	$scope.reminders=JSON.parse(JSON.stringify(info))
 	
	
	$scope.addReminder=function(){
		
		console.log('reminder'+$scope.reminder);

		$scope.addLocalNotification($scope.reminder);
				
	}
	
	$scope.addLocalNotification=function(rem){
		
		 var schedule_time = moment(rem.date);
			
				var min=moment(rem.time).minutes()
				var hour=moment(rem.time).hours();
				schedule_time.minutes(min);
				schedule_time.hours(hour);
			
			schedule_time = new Date(schedule_time);
			console.log(schedule_time);		
		
		if(!info)
			info=[];
		
			var id = info.length;
			var reminder={
				id:id,
				title:rem.title,
				message:rem.message,
				time:schedule_time,
				repeat:rem.repeat
			}
			
			info.push(reminder);
			localStorage.setItem("rp_data", JSON.stringify(info));
	
		$scope.reminders=JSON.parse(JSON.stringify(info))
		$scope.scheduleSingleNotification(id,rem.title,rem.message,schedule_time,rem.repeat);
	}
	
	
    // ========== Scheduling
    
    $scope.scheduleSingleNotification = function (id,title,message,tim,rep) {
	  
	  if(rep=="0")rep=0;
		
      $cordovaLocalNotification.schedule({
        id: id,
        title: title,
        text: message,
        firstAt: tim,
		every:rep,
		sound:"file://not.mp3"
		
      }).then(function (result) {
        
		
		 $cordovaToast
			.show('Reminder Added', 'short', 'center')
			.then(function(success) {
			  // success
			}, function (error) {
			  // error
			});
				
      });
    };

	
	
});