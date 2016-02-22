angular.module('ukc2016', ['ngRoute'])
	.config(['$routeProvider', UCK2016Config])
	.controller('UCK2016Controller', ['$http', '$location', UCK2016Controller]);

function UCK2016Config($routeProvider) {
    $routeProvider.
		when('/', {
			templateUrl: 'public/views/landing.html'
		}).
        when('/greetings', {
            templateUrl: 'public/views/greetings.html'
        }).
		when('/about_ksea', {
			templateUrl: 'public/views/about_ksea.html'
		}).
        when('/about_ukc', {
            templateUrl: 'public/views/about_ukc.html'
        }).
        when('/program_glance', {
            templateUrl: 'public/views/program_glance.html'
        }).
        when('/call_for_papar', {
            templateUrl: 'public/views/call_for_papar.html'
        }).
        when('/paper_submit', {
            templateUrl: 'public/views/paper_submit.html'
        }).
        when('/symposiums', {
            templateUrl: 'public/views/symposiums.html'
        }).
		otherwise({
			redirectTo: '/'
		});
};
function UCK2016Controller($http, $location, $scope) {
    var vm = this;

    $http.get('public/data/symposiums.json').then(function(response) {
        vm.symposiums = response.data.symposiums;
        // console.log(vm.symposiums);
        vm.selectedCategoryIdx = 0;
        vm.selectedSubSympIdx = 0;
    });
    vm.selectMenu = function(menu) {
    	vm.selectedMenu = menu;
    	$location.path("/" + menu);
    };
    vm.switchMenu = function(menu) {
    	vm.selectedMenu = menu;
    };
    vm.goHome = function() {
    	$location.path("/");
    };
    vm.selecteSymposium= function(categoryIdx, sympIdx) {
        console.log(categoryIdx, sympIdx);
        vm.selectedCategoryIdx = categoryIdx;
        vm.selectedSubSympIdx = sympIdx;
    };
    vm.goToSpecificSymp = function(categoryIdx, sympIdx) {
        vm.selectedCategoryIdx = categoryIdx;
        vm.selectedSubSympIdx = sympIdx;
        $location.path('/symposiums');
    }
    vm.saveToDB = function() {
        $http({
                method  : 'POST',
                url     : "public/php/server.php",
                data    : {"first_name": "Hailey"},
                headers : { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS' }
              })
            .success(function(data, status, headers, config) {
                if (data.msg != '')
                {
                    $scope.msgs.push(data.msg);
                }
                else
                {
                    $scope.errors.push(data.error);
                }
            }).error(function(data, status) { // called asynchronously if an error occurs
    // or server returns response with an error status.
                $scope.errors.push(status);
            });
    }
    
};
