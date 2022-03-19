function interpret(command: string): string {
  while (command.includes("(")) {
    command = command.replace("(al)", "al")
    command = command.replace("()", "o")
  }
  return command;
};