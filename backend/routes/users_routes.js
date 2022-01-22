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

Router.post("/clients/create-user", createUserControler);

Router.get("/clients/get-clients", getUsersControler);

Router.get("/clients/get-active-users", getActiveUsersControler);

Router.get("/clients/get-users-price", getUsersByCashControler);

Router.put("/clients/update-user-activation", toggleUserActiveControler);

Router.put("/clients/update-cash", updateCashControler);

Router.put("/clients/transfer-cash", transferCashControler);

Router.put("/clients/update-credit", updateCreditControler);

module.exports = Router;