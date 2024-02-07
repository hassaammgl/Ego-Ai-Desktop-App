const handleCommands = (query) => {
  let commands = ["open youtube", "open google"];
  if (!commands.includes(query)) {
    console.log("No commands found!");
  } else {
    console.log(commands.includes(query) === true ? commands.at(query) : "");
    console.log(commands.indexOf(query));
  }
};
module.exports = {
  handleCommands,
};
