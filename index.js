// Innotrade Enapso Logger
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// a new console object for enhanced logging to the console

const { Console } = require('./lib/enapso-logger');

const NAMESPACE = "enlogger";

module.exports = {
	[NAMESPACE]: {
		Console
	}
}
