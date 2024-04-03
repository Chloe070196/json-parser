function isValid(input) {
  if (
    !input ||
    typeof input !== "string" ||
    input[0] !== "{" ||
    input[input.length - 1] !== "}"
  ) {
    return false;
  }
  return true;
}

module.exports = isValid;
