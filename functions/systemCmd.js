const exec = require("child_process").exec;

const systemCommands = {
  openYoutube: () => {
    if (process.platform === "win32") {
      return;
    } else if (process.platform === "darwin") {
      exec(
        "open '/Applications/Google Chrome.app' 'https://www.youtube.com'",
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`opening youtube`);
          console.error(`stderr: ${stderr}`);
          return "Opening Youtube";
        }
      );
    } else {
      exec("xdg-open https://www.youtube.com", (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`opening youtube`);
        console.error(`stderr: ${stderr}`);
        return "Opening Youtube";
      });
    }
  },
  openGoogle: () => {
    if (process.platform === "win32") {
      return;
    } else if (process.platform === "darwin") {
      exec(
        "open '/Applications/Google Chrome.app' 'https://www.google.com'",
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`opening google.com`);
          console.error(`stderr: ${stderr}`);
        }
      );
    } else {
      exec("xdg-open https://www.google.com", (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`opening google`);
        console.error(`stderr: ${stderr}`);
      });
    }
  },
};
module.exports = {
  systemCommands,
};
