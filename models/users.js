var mongoose = require('mongoose')
var Types = mongoose.Schema.Types

var user = new mongoose.Schema({
	name: {type: String, required: true},
	notes: [{
		work: {type: Types.ObjectId, ref: 'work', required: true},
		result: {type: Number, required: true}
	}]
}, {timestamps: true})

module.exports = mongoose.model('user', user)