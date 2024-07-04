"use server";

import { IChatCompletionMessage } from "./IchatCompletionMessage";

export const createChatCompletion = async (messages: IChatCompletionMessage[]) => {
  const response = await fetch(`${process.env.API_URL}/openai/chat-completion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ messages })
  });
  return response.json();
}