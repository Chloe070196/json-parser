const { logOnExit } = require("./logger");

function exit(exitMessage, exitCode) {
  logOnExit(exitMessage, exitCode);
  process.exit([0]);
}

module.exports = exit;
