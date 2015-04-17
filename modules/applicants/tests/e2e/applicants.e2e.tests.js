'use strict';

describe('Applicants E2E Tests:', function() {
	describe('Test Applicants page', function() {
		it('Should not include new Applicants', function() {
			browser.get('http://localhost:3000/#!/applicants');
			expect(element.all(by.repeater('applicant in applicants')).count()).toEqual(0);
		});
	});
});
