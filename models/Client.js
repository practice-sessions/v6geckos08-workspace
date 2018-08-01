const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClientSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	profilepix: {
		type: Buffer
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Client = mongoose.model('clients', ClientSchema);
