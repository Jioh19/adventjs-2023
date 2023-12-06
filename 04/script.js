function decode(message: string) {
  do {
    const s1 = message.lastIndexOf('(');
    const e1 = message.indexOf(')', s1);
    const cambio = message.slice(s1+1, e1).split("").reverse().join("");
    message = message.slice(0, s1) + cambio + message.slice(e1+1);
  } while(message.includes("("))
  return message;
}
