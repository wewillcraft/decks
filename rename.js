const fs = require("fs");
const readdirp = require("readdirp");

const distDir = "./dist/";
const fileIn = "PITCHME.html";
const fileOut = "index.html";

readdirp(distDir, { fileFilter: "**/*.html" })
  .on("data", (entry) => {
    const oldPath = distDir + entry.path;
    if (oldPath.endsWith(fileIn)) {
      const newPath = oldPath.replace(fileIn, fileOut);
      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log(`renamed ${oldPath} => ${newPath}`);
      });
    }
  })
  .on("warn", (error) => console.error("non-fatal error", error))
  .on("error", (error) => console.error("fatal error", error))
  .on("end", () => console.log("done"));
