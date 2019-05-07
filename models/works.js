var mongoose = require('mongoose')
var Types = mongoose.Schema.Types

var work = new mongoose.Schema({
	creator: {type: Types.ObjectId, ref: 'user', required: true},
	name: {type: String, required: true}

}, {timestamps: true})

module.exports = mongoose.model('work', work)