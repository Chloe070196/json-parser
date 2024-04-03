const parse = require("./lib/parser.js");
const { log } = require("./lib/logger.js");
const exit = require("./lib/exit.js")
const isValid = require("./lib/inputChecker.js");

process.stdin.on("data", (data) => {
  const dataStr = data.toString().slice(0, data.length - 2)

  if (!isValid(dataStr)) {
    exit("error", 1)
    return;
  }

  const parsedJson = parse(dataStr);
  log(parsedJson);

  exit("success", 0);
});
