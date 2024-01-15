const fs = require('fs');
const mergePatch = require('json-merge-patch');

const ROOT_PATH = './src/assets/i18n';
const SHARED_FOLDER_NAME = 'common';

const locales = ['en'];

const directories = fs.readdirSync(ROOT_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(dirName => dirName !== SHARED_FOLDER_NAME);


const filesToMerge = [];
directories.forEach(dirName => {
    locales.forEach(loc => {
        const featureFileName = `${ROOT_PATH}/${dirName}/${loc}.json`;
        const sharedFileName = `${ROOT_PATH}/${SHARED_FOLDER_NAME}/${loc}.json`;
        if(!fs.existsSync(featureFileName)) {
            throw new Error('Translation file missing: ' + featureFileName)
        }
        if(!fs.existsSync(sharedFileName)) {
            throw new Error('Translation file missing: ' + sharedFileName)
        }
        filesToMerge.push([`${ROOT_PATH}/${dirName}/${loc}`, `${ROOT_PATH}/${SHARED_FOLDER_NAME}/${loc}`]);

    });
});

filesToMerge.forEach(files => {
    const merged = files.map(file => JSON.parse(fs.readFileSync(file + ".json", 'utf8'))).reduce((a,b) => mergePatch.apply(a, b));
    fs.writeFileSync(files[0] + "_merged.json", JSON.stringify(merged));
});