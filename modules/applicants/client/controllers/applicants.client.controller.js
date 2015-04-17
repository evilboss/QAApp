'use strict';

// Applicants controller
angular.module('applicants').controller('ApplicantsController', ['$scope','$log', '$stateParams', '$location', 'Authentication', 'Applicants',
	function($scope, $log,  $stateParams, $location, Authentication, Applicants ) {
		$scope.authentication = Authentication;
		// Create new Applicant
		$scope.create = function() {
			// Create new Applicant object
			var applicant = new Applicants ({
				firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                gender: this.gender,
                mobile: this.mobile,
                landLine: this.landLine,
                suburb: this.suburb,
                company: this.company,
                position: this.position

			});

			// Redirect after save
			applicant.$save(function(response) {
				$location.path('applicants/' + response._id);

				// Clear form fields
				$scope.firstName = '';
                $scope.lastName = '';
                $scope.email = '';
                $scope.gender = '';
                $scope.mobile = '';
                $scope.landLine = '';
                $scope.suburb = '';
                $scope.company = '';
                $scope.position = '';

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Applicant
		$scope.remove = function( applicant ) {
			if ( applicant ) { applicant.$remove();

				for (var i in $scope.applicants ) {
					if ($scope.applicants [i] === applicant ) {
						$scope.applicants.splice(i, 1);
					}
				}
			} else {
				$scope.applicant.$remove(function() {
					$location.path('applicants');
				});
			}
		};

		// Update existing Applicant
		$scope.update = function() {
			var applicant = $scope.applicant ;

			applicant.$update(function() {
				$location.path('applicants/' + applicant._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Applicants
		$scope.find = function() {
			$scope.applicants = Applicants.query();
		};

		// Find existing Applicant
		$scope.findOne = function() {
			$scope.applicant = Applicants.get({ 
				applicantId: $stateParams.applicantId
			});
		};


        /*dropdown*/
        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
	}
]);
