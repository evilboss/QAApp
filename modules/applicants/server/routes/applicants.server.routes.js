'use strict';

module.exports = function(app) {
	var applicants = require('../controllers/applicants.server.controller');
	var applicantsPolicy = require('../policies/applicants.server.policy');

	// Applicants Routes
	app.route('/api/applicants').all()
		.get(applicants.list).all(applicantsPolicy.isAllowed)
		.post(applicants.create);

	app.route('/api/applicants/:applicantId').all(applicantsPolicy.isAllowed)
		.get(applicants.read)
		.put(applicants.update)
		.delete(applicants.delete);

	// Finish by binding the Applicant middleware
	app.param('applicantId', applicants.applicantByID);
};