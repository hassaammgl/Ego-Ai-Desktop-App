const { systemCommands } = require("./systemCmd");

const handleCommands = (query) => {
  let commands = ["open youtube", "open google"];
  if (!commands.includes(query)) {
    // console.log("No commands found!");
    
  } else {
    if (commands.includes(query) === true) {
      let index = commands.indexOf(query);
      console.log(commands[index]);
      switch (commands[index]) {
        case "open youtube":
          // systemCommands.openYoutube();
          break;

        case "open google":
          systemCommands.openGoogle();
          break;
      }
    } else {
      console.log("Command not found");
    }
  }
};
module.exports = {
  handleCommands,
};
