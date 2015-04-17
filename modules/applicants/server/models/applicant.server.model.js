'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Applicant Schema
 */
var ApplicantSchema = new Schema({
    firstName: {
        type: String,
        default: '',
        required: 'Please fill Applicant name',
        trim: true
    },
    lastName: {
        type: String,
        default: '',
        required: 'Please fill Applicant Last name',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        default: '',
        required: 'Please fill in your email',
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    gender: {
        type: String,
        required: 'Please fill in your Sex'
    },
    mobile: {
        type: String,
        required: 'We need a mobile number'
    },
    landLine:{
        type:String
    },
    suburb:{
        type:String
    },
    company:{type:String},
    position:{type:String,required:'Position is required'},

    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Applicant', ApplicantSchema);
