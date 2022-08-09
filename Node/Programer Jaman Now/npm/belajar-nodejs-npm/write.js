import fs from 'fs';

export const writeToFile = (file, content) => {
	fs.writeFileSync(file, content);
	console.info(`Successfully Write file ${file}`);
};

export const readFile = (file) => {
	return fs.readFileSync(file, { encoding: 'utf-8', flag: 'r' });
};
