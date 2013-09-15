
function UrlListCtrl($scope,$timeout) {

	var showId = 0;
	var cycle;
	var showSettings = true;
	var showStopButton = false;
	var showStartButton = true;
	var showShowSettingsButton = false;
	var showHideSettingsButton = false;
	var cycleTime = 5000;
	var screenHeight = 900;
	var barHeight = 150;

  $scope.urls = [
    {"name": "ns1",
     "url": "http://www.ns.nl/",
	 "visible":false},
    {"name": "ns2",
     "url": "http://www.nu.nl/",
	 "visible":false},
	 {"name": "ns3",
     "url": "http://www.test.nl/",
	 "visible":false},
	];

  
    $scope.addUrl = function() {
		$scope.urls.push({name:$scope.urlName, url:$scope.urlText, visible:false});
		$scope.urlName = '';
		$scope.urlText = '';
	};
	
	$scope.delete = function (url) {
			$scope.urls.splice( $scope.urls.indexOf(url), 1 );
	};
	
	$scope.applyCycleTime = function() {
		cycleTime = $scope.cycleTimeInput;
	};
	
	$scope.applyScreenHeight = function() {
		screenHeight = $scope.screenHeightInput;
	};
	
	$scope.getCycleTime = function() {
		return cycleTime;
	};
	
	$scope.getFrameHeight = function() {
		return screenHeight-barHeight;
	};
	
	$scope.getScreenHeight = function() {
		return screenHeight;
	};
	
	$scope.getShowId = function() {
		return showId;
	};
	
	$scope.getShowSettings = function() {
		return showSettings;
	};
	
	$scope.getShowStartButton = function() {
		return showStartButton;
	};
	
	$scope.getShowSettingsButton = function() {
		return showShowSettingsButton;
	};
	
	$scope.getHideSettingsButton = function() {
		return showHideSettingsButton;
	};
	
	$scope.getShowStopButton = function() {
		return showStopButton;
	};
	
	$scope.showSettings = function() {
		showShowSettingsButton=false;
		showHideSettingsButton=true;
		showSettings = true;
	};
	
	$scope.hideSettings = function() {
		showShowSettingsButton=true;
		showHideSettingsButton=false;
		showSettings = false;
	};
	
	$scope.startCycling = function() {
		$scope.urls[showId].visible=true;
		showSettings=false;
		showStartButton=false;
		showStopButton=true;
		showShowSettingsButton=true;
		$scope.cycle();
	};
	
	$scope.cycle = function() {
		cycle = $timeout(function() {
			$scope.urls[showId].visible = false;
			if(showId < $scope.urls.length-1){
			showId++;}
			else{showId=0;}
			$scope.urls[showId].visible = true;
            $scope.cycle();
        }, cycleTime);
	};
	
	$scope.stopCycling = function() {
		$timeout.cancel(cycle);
		$scope.urls[showId].visible = false;
		showId=0;
		showSettings = true;
		showStopButton=false;
		showStartButton=true;
		showShowSettingsButton=false;
		showHideSettingsButton=false;
	};
	
}