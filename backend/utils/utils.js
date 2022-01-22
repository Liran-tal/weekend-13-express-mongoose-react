const validator = require("validator");


const isCreditEnough = (user, amount) => {
	return (-user.credit <= user.cash - amount);
};

const isValidId = (id) => {
	return validator.isNumeric(String(id), {no_symbols: true});
};

const setRangeNum = (value, lim) => {
	if (value && typeof(value === "Number") && isValidId(value)) {			
		return value;
	}
	else {
		if (lim === "min") {
			return Number.NEGATIVE_INFINITY;
		}
		return Number.POSITIVE_INFINITY;
	}
};


module.exports = {
	isCreditEnough,
	isValidId,
	setRangeNum,
}