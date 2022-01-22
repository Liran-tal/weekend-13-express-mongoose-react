const express = require("express");
const Router = express.Router();

const {
	createUserControler,
	getUsersControler,
	getActiveUsersControler,
	getUsersByCashControler,
	toggleUserActiveControler,
	updateCashControler,
	updateCreditControler,
	transferCashControler,

} = require ("../controlers/users/users_controlers.js");

Router.post("/create-user", createUserControler);

Router.get("/get-users", getUsersControler);

Router.get("/get-active-users", getActiveUsersControler);

Router.get("/get-users-price", getUsersByCashControler);

Router.put("/update-user-activation", toggleUserActiveControler);

Router.put("/update-cash", updateCashControler);

Router.put("/transfer-cash", transferCashControler);

Router.put("/update-credit", updateCreditControler);

module.exports = Router;