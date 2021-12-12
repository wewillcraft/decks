const fs = require("fs-extra");
const path = require("path");

const ASSETS_DIRECTORY = "_assets";
const SRC_DIRECTORY = "src";
const OUT_DIRECTORY = "dist";

const getAllAssetDirectories = (dirPath, assetsList = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const currentPath = `${dirPath}/${file}`;

        if (!fs.statSync(currentPath).isDirectory()) return;

        if (file === ASSETS_DIRECTORY) {
            assetsList.push(path.join(dirPath, "/", file));
        } else {
            assetsList = getAllAssetDirectories(currentPath, assetsList);
        }
    });

    return assetsList;
};

getAllAssetDirectories(SRC_DIRECTORY).forEach((assetsDirPath) => {
    try {
        const src = path.join(__dirname, "..", assetsDirPath);
        const out = path.join(
            __dirname,
            "..",
            assetsDirPath.replace(
                new RegExp(`^${SRC_DIRECTORY}\/`),
                `${OUT_DIRECTORY}/`
            )
        );
        fs.copySync(src, out, { overwrite: true });
    } catch (err) {
        console.log(err);
    }
});
