const regex = /^\/([^@\s]+)@?(?:(\S+)|)\s?([\s\S]+)?$/i;

export const parseMessage = (messageText: string) => {
  if (!regex.test(messageText)) {
    return null;
  }
  const parts = regex.exec(messageText);
  const command = {
    text: messageText,
    command: parts[1],
    bot: parts[2],
    args: parts[3],
    get splitArgs() {
      return !parts[3] ? [] : parts[3].split(/\s+/).filter((arg) => arg.length);
    },
  };
  return command;
};

export type CommandData = ReturnType<typeof parseMessage>;  