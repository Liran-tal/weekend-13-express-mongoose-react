const mongoose = require("mongoose");
const validator = require("validator");

const user = new mongoose.Schema({
	id: {
		type: String,
		unique: [true, "Id already exist"],
		required: true,
		// validate: [{validator: function (id) {
		// 		validator.isNumeric(id, {no_symbols: true})
		// 	}}, 
		// 	"Id must contain digits (0-9) only"
		// ]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	cash: {
		type: Number,
		min: [0, "Amount of money cannot be negative"],
		default: 0
	},
	credit: {
		type: Number,
		min: [0, "Credit cannot be negative"],
		default: 0
	}
});


module.exports = mongoose.model("User", user);