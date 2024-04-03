function log(data) {
    process.stdout.write(data + "\n")
}

function logOnExit(exitMessage, exitCode) {
    process.stdout.write("exited with status: " + exitMessage + ": " + exitCode)
}

module.exports = {log, logOnExit}