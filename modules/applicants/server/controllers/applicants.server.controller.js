'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Applicant = mongoose.model('Applicant'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Applicant
 */
exports.create = function(req, res) {
	var applicant = new Applicant(req.body);
	applicant.user = req.user;

	applicant.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(applicant);
		}
	});
};

/**
 * Show the current Applicant
 */
exports.read = function(req, res) {
	res.jsonp(req.applicant);
};

/**
 * Update a Applicant
 */
exports.update = function(req, res) {
	var applicant = req.applicant ;

	applicant = _.extend(applicant , req.body);

	applicant.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(applicant);
		}
	});
};

/**
 * Delete an Applicant
 */
exports.delete = function(req, res) {
	var applicant = req.applicant ;

	applicant.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(applicant);
		}
	});
};

/**
 * List of Applicants
 */
exports.list = function(req, res) { Applicant.find().sort('-created').populate('user', 'displayName').exec(function(err, applicants) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(applicants);
		}
	});
};

/**
 * Applicant middleware
 */
exports.applicantByID = function(req, res, next, id) { Applicant.findById(id).populate('user', 'displayName').exec(function(err, applicant) {
		if (err) return next(err);
		if (! applicant) return next(new Error('Failed to load Applicant ' + id));
		req.applicant = applicant ;
		next();
	});
};