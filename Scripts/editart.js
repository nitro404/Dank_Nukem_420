"use strict";

const modConfig = require("../.modconfig.json");
const child_process = require("child_process");

console.log("Starting EDITART...");

setTimeout(function() {
	process.exit(0);
}, 0);

const editartProcess = child_process.spawn(
	modConfig.dosBoxPath,
	[
		"-conf", "DOSBox/editart.conf",
		"-noconsole",
		"-c", `MOUNT C ${modConfig.dataPath}`,
		"-c", "C:",
		"-c", "EDITART.EXE",
		"-c", "EXIT"
	],
	{
		detached: true
	}
);
