"use strict";

const utilities = require("extra-utilities");
const modConfig = require("../.modconfig.json");
const child_process = require("child_process");

console.log("Starting Mapster32...");

setTimeout(function() {
	process.exit(0);
}, 0);

const editartProcess = child_process.spawn(
	utilities.getFileName(modConfig.mapsterPath),
	[],
	{
		cwd: utilities.getFilePath(modConfig.mapsterPath),
		detached: true
	}
);
