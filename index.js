const { formatFileName, getFileContent } = require("./lib/utils.js");
const isValid = require("./lib/inputChecker.js");
const parse = require("./lib/parser.js");
const { log } = require("./lib/logger.js");
const exit = require("./lib/exit.js");
const tokenize = require("./lib/lexer.js");

process.stdin.on("data", (data) => {
  const fileName = formatFileName(data)
  const dataStr = getFileContent(fileName)

  if (!isValid(dataStr)) {
    exit("error", 1)
    return;
  }
  const tokens = tokenize(dataStr)
  const parsedJson = parse(tokens);
  log(parsedJson);

  exit("success", 0);
});
