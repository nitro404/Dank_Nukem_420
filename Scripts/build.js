"use strict";

const path = require("path-extra");
const fs = require("fs-extra");
const Group = require("duke3d-group");
const modConfig = require("../.modconfig.json");
const groupIgnoreFileName = ".grpignore.json";
const conFileDestinationPath = path.join(modConfig.gamePath, modConfig.conFileName);
let groupIgnoreFiles = [];

try { groupIgnoreFiles = require(path.join("..", modConfig.dataPath, groupIgnoreFileName)); } catch(error) { }

groupIgnoreFiles.push(groupIgnoreFileName);
groupIgnoreFiles = groupIgnoreFiles.map(function(fileName) {
	return fileName.toLowerCase();
})

const modGroup = new Group(path.join(modConfig.gamePath, modConfig.groupFileName));

const modFiles = fs.readdirSync(modConfig.dataPath).filter(function(fileName) {
	return groupIgnoreFiles.indexOf(fileName.toLowerCase()) === -1;
});

modFiles.forEach(function(fileName) {
	console.log(`Adding ${fileName} to ${modConfig.name} group file...`);

	modGroup.addFile(path.join(modConfig.dataPath, fileName));
});

console.log(`Added ${modGroup.numberOfFiles()} files to ${modConfig.name} group file!`);

console.log(`Writing ${modConfig.name} group file to ${modGroup.filePath}...`);

modGroup.save();

console.log(`Copying ${modConfig.name} con file to ${conFileDestinationPath}...`);

fs.copyFileSync(path.join(modConfig.dataPath, modConfig.conFileName), conFileDestinationPath);

console.log("Done!");
