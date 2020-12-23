"use strict";

const modConfig = require("../.modconfig.json");
const child_process = require("child_process");

console.log(`Starting '${modConfig.name}'!`);

setTimeout(function() {
	process.exit(0);
}, 0);

const gameProcess = child_process.spawn(
	modConfig.dosBoxPath,
	[
		"-conf", "DOSBox/duke3d.conf",
		"-noconsole",
		"-c", `MOUNT C ${modConfig.gamePath}`,
		"-c", "C:",
		"-c", `DUKE3D.EXE /g${modConfig.groupFileName} /x${modConfig.conFileName}`,
		"-c", "EXIT"
	],
	{
		detached: true
	}
);
