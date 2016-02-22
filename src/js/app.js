angular.module('ukc2016', ['ngRoute'])
	.config(['$routeProvider', UCK2016Config])
	.controller('UCK2016Controller', ['$http', '$location', UCK2016Controller]);

function UCK2016Config($routeProvider) {
    $routeProvider.
		when('/', {
			templateUrl: 'src/views/landing.html'
		}).
        when('/greetings', {
            templateUrl: 'src/views/greetings.html'
        }).
		when('/about_ksea', {
			templateUrl: 'src/views/about_ksea.html'
		}).
        when('/about_ukc', {
            templateUrl: 'src/views/about_ukc.html'
        }).
        when('/program_glance', {
            templateUrl: 'src/views/program_glance.html'
        }).
        when('/call_for_papar', {
            templateUrl: 'src/views/call_for_papar.html'
        }).
        when('/paper_submit', {
            templateUrl: 'src/views/paper_submit.html'
        }).
        when('/symposiums', {
            templateUrl: 'src/views/symposiums.html'
        }).
		otherwise({
			redirectTo: '/'
		});
};
function UCK2016Controller($http, $location) {
    var vm = this;

    $http.get('src/data/symposiums.json').then(function(response) {
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
};
