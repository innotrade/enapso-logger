// Innotrade Enapso Logger
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// a new console object for enhanced logging to the console

const { EnapsoLogger } = require('../lib/enapso-logger');

function demo() {
	let logger = new EnapsoLogger();
	logger.info("This is an information");
	logger.warn("This is a warning");
	logger.error("This is an error message");
	logger.fatal("This is a fatal message");
}

demo();
