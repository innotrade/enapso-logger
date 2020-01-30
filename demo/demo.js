// Innotrade Enapso Logger
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// a new console object for enhanced logging to the console

const { EnapsoLogger } = require('../lib/enapso-logger');

function demo() {
	let enlogger = new EnapsoLogger();
	enlogger.info("This is an information");
	enlogger.warn("This is a warning");
	enlogger.error("This is an error message");
	enlogger.fatal("This is a fatal message");
}

demo();
