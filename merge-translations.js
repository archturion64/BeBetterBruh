const fs = require('fs');
const mergePatch = require('json-merge-patch');

const ROOT_PATH = './src/assets/i18n';
const SHARED_FOLDER_NAME = 'shared';

const directories = fs.readdirSync(ROOT_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(dirName => dirName !== SHARED_FOLDER_NAME);


const filesToMerge = [];
directories.forEach(dirName => {
        filesToMerge.push([`${ROOT_PATH}/${dirName}/de`, `${ROOT_PATH}/${SHARED_FOLDER_NAME}/de`]);
        filesToMerge.push([`${ROOT_PATH}/${dirName}/en`, `${ROOT_PATH}/${SHARED_FOLDER_NAME}/en`]);
    }
);

filesToMerge.forEach(files => {
    const merged = files.map(file => JSON.parse(fs.readFileSync(file + ".json", 'utf8'))).reduce((a,b) => mergePatch.apply(a, b));
    fs.writeFileSync(files[0] + "_merged.json", JSON.stringify(merged));
});