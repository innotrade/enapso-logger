// Innotrade Enapso Logger
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// a new console object for enhanced logging to the console

const NAMESPACE = "enlog";

class Console {

	static get MIN_LEVEL() { return 0; }
	static get MAX_LEVEL() { return 6; }

	static get DEF_PRF_LEN() { return 4; }
	static get DEF_SEP_LEN() { return 80; }
	static get DEF_SEP_CHAR() { return '-'; }

	static get ALL() { return 0; }
	static get DEBUG() { return 1; }
	static get INFO() { return 2; }
	static get WARN() { return 3; }
	static get ERROR() { return 4; }
	static get FATAL() { return 5; }
	static get NONE() { return 6; }

	static get LEVELS() {
		return [
			'ALL',
			'DEBUG',
			'INFO',
			'WARN',
			'ERROR',
			'FATAL',
			'NONE'
		]
	}

	constructor() {
		this.level = 2;
		this.active = true;
		this.layout = '[$l] $t $m';
	}

	setLevel(level) {
		if (level
			&& (typeof level === 'number')
			&& (level >= Console.MIN_LEVEL)
			&& (level <= Console.MAX_LEVEL)) {
			this.level = level;
		} else {
			throw new Error('Tools.console.setLevel:'
				+ ' Invalid level!');
		}
	}

	setLayout(layout) {
		if (layout && typeof layout === 'string') {
			this.layout = layout;
		} else {
			throw new Error('Tools.console.setLayout:'
				+ ' Invalid layout, needs to be a string!');
		}
	}

	replaceVars(level, message) {
		if (message === undefined
			|| message === null
			|| typeof message !== 'string') {
			message = '';
		}
		var lMsg = this.layout;
		lMsg = lMsg
			.replace('$m', message)
			.replace('$l', Console.LEVELS[level])
			.replace('$t', new Date().toISOString());
		return lMsg;
	}

	setActive(active) {
		this.active = active;
	}

	separatorLine(aIn, options) {
		if (!aIn) {
			aIn = '';
		}
		options = Tools.checkArgs(options, {
			char: Console.DEF_SEP_CHAR,
			length: Console.DEF_SEP_LEN,
			prefix: Console.DEF_PRF_LEN
		});
		if (Console.DEF_PRF_LEN > 0) {
			aIn = ' ' + aIn;
		}
		for (var lCnt = 0; lCnt < Console.DEF_PRF_LEN; lCnt++) {
			aIn = options.char + aIn;
		}
		aIn += ' ';
		while (aIn.length < options.length) {
			aIn += options.char;
		}
		return aIn;
	}

	debug(message) {
		if (message && this.active && this.level <= Console.DEBUG) {
			arguments[0] = this.replaceVars(Console.DEBUG, arguments[0]);
			console.log.apply(this, arguments);
		}
	}

	info(message) {
		if (message && this.active && this.level <= Console.INFO) {
			arguments[0] = this.replaceVars(Console.INFO, arguments[0]);
			console.info.apply(this, arguments);
		}
	}

	warn(message) {
		if (message && this.active && this.level <= Console.WARN) {
			arguments[0] = this.replaceVars(Console.WARN, arguments[0]);
			console.warn.apply(this, arguments);
		}
	}

	error(message) {
		if (message && this.active && this.level <= Console.ERROR) {
			arguments[0] = this.replaceVars(Console.ERROR, arguments[0]);
			console.error.apply(this, arguments);
		}
	}

	fatal(message) {
		if (message && this.active && this.level <= Console.FATAL) {
			arguments[0] = this.replaceVars(Console.FATAL, arguments[0]);
			console.error.apply(this, arguments);
		}
	}

}

/*
function demo() {
	let logger = new Console();
	logger.info("This is an information");
	logger.warn("This is a warning");
	logger.error("This is an error message");
	logger.fatal("This is a fatal message");
}

demo();
*/

module.exports = {
	[NAMESPACE]: {
		Console
	}
}
