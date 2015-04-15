'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.myInterval = 2000;
        $scope.slides = [
            {
                image: '/modules/core/img/slides/slider1.jpg',
                caption:"LloydE"
            },
            {
                image: '/modules/core/img/slides/slider2.jpg',
                caption:'Wimpy Kid'
            },
            {
                image: '/modules/core/img/slides/slider5.jpg',
                caption:'Fart MAn'

            }
        ];



    }
]);
