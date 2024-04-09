const fs = require("fs");
function formatFileName(data) {
  return data.toString().slice(0, data.length - 2);
}
function getFileContent(fileName) {
  return fs.readFileSync(fileName, "utf8").trim();
}

module.exports = {
  formatFileName, 
  getFileContent
} 