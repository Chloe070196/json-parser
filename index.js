const parse = require("./lib/parser.js");
const { log } = require("./lib/logger.js");
const exit = require("./lib/exit.js")
const isValid = require("./lib/inputChecker.js");
const fs = require('fs')

process.stdin.on("data", (data) => {
  const fileName = data.toString().slice(0, data.length - 2)
  const dataStr = fs.readFileSync(fileName, "utf8");
  
  if (!isValid(dataStr)) {
    exit("error", 1)
    return;
  }

  const parsedJson = parse(dataStr);
  log(parsedJson);

  exit("success", 0);
});
