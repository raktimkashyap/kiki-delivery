const prompt = require("prompt-sync")({ sigint: true });

function io(question) {
  return prompt(question);
}

module.exports = io;
