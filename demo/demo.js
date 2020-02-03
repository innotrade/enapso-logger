// Innotrade Enapso Logger
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// a new console object for enhanced logging to the console

const { EnapsoLogger } = require('../index');
global.enlogger = new EnapsoLogger();
enlogger.setLevel(EnapsoLogger.ALL);

function demo() {
	enlogger.setLevel(EnapsoLogger.ALL);

	enlogger.log("This is a standard log line, just for compatibility reasons");
	enlogger.debug("This is a debug message");
	enlogger.info("This is an information");
	enlogger.warn("This is a warning");
	enlogger.error("This is an error message");
	enlogger.fatal("This is a fatal message");

	enlogger.info(enlogger.separatorLine());
	enlogger.setActive(false);
	enlogger.info("This message will NOT be shown");
	enlogger.setActive(true);
	enlogger.info("This message will be shown again");
}

demo();
