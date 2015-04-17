'use strict';

// Configuring the Applicants module
angular.module('applicants').run(['Menus',
	function(Menus) {
		// Add the Applicants dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Applicants',
			state: 'applicants',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'applicants', {
			title: 'List Applicants',
			state: 'applicants.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'applicants', {
			title: 'Create Applicant',
			state: 'applicants.create'
		});
	}
]);