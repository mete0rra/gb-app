import { v4 as uuidv4 } from "uuid";

export const AUTHORS = {
  ME: "User",
  BOT: "Chat-bot",
};

export const INITIAL_MESSAGES = [
  {
    id: uuidv4(),
    author: AUTHORS.BOT,
    text: "Welcome to chat!",
  },
  {
    id: uuidv4(),
    author: AUTHORS.BOT,
    text: "Please, send info about your problem.",
  },
];

export const BOT_MESSAGE = {
  id: "",
  author: AUTHORS.BOT,
  text: "Thanks for your message! We will reply ASAP.",
};
