function UrlListCtrl($scope) {

	var showUrl = '';
	var iframehtml = '';
	var loop = false;
	var showId = 0;
	var sliderShow = false;
	var optionsHide = false;

  $scope.urls = [
    {"name": "nu.nl",
     "url": "http://www.ns.nl/"},
    {"name": "ns.nl",
     "url": "http://www.ns.nl/"},
	];
  
	$scope.getShowUrl = $scope.urls[showId].url;
	$scope.getShowName = $scope.urls[showId].name;
  
    $scope.addUrl = function() {
		$scope.urls.push({name:$scope.urlName, url:$scope.urlText});
		$scope.urlName = '';
		$scope.urlText = '';
	};
	
	$scope.startstopSlider = function() {
		if($scope.sliderShow){
			$scope.sliderShow = false;
			$scope.optionsHide = false;

		}
		else{
		$scope.sliderShow = true;
			$scope.optionsHide = true;
			}
		
	};
	
	$scope.startCycling = function() {
	loop = true;
	while(loop){
		iframehtml='<iframe src="' + $scope.urls[showId].url + '" width=100% height=1000px; name="myiframe"></iframe>'
		document.getElementById("majoriframe").innerHTML=iframehtml;
		wait(3000);
		//setTimeout($scope.donothing(),3000);
		if(showId < $scope.urls.length-1){
		showId++;
		} 
		else{showId=0;}
		}
	};
	
	$scope.donothing = function(){};
	
	$scope.stopCycling = function() {
		loop = false;
		showId=0;
		iframehtml=''
		document.getElementById("majoriframe").innerHTML=iframehtml;
	};

}