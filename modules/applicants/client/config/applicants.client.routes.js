'use strict';

//Setting up route
angular.module('applicants').config(['$stateProvider',
	function($stateProvider) {
		// Applicants state routing
		$stateProvider.
		state('applicants', {
			abstract: true,
			url: '/applicants',
			template: '<ui-view/>'
		}).
		state('applicants.list', {
			url: '',
			templateUrl: 'modules/applicants/views/list-applicants.client.view.html'
		}).
		state('applicants.create', {
			url: '/create',
			templateUrl: 'modules/applicants/views/create-applicant.client.view.html'
		}).
		state('applicants.view', {
			url: '/:applicantId',
			templateUrl: 'modules/applicants/views/view-applicant.client.view.html'
		}).
		state('applicants.edit', {
			url: '/:applicantId/edit',
			templateUrl: 'modules/applicants/views/edit-applicant.client.view.html'
		});
	}
]);