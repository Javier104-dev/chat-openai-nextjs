"use client";

import { useState } from "react";
import { IChatCompletionMessage } from "./IchatCompletionMessage";
import { createChatCompletion } from "./createChatCompletion";

export default function Home() {
  const [messages, setMessages] = useState<IChatCompletionMessage[]>([]);
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
    const updatedMessages = [
      ...messages,
      {
        role: 'user',
        content: message,
      }
    ];
    setMessages(updatedMessages);
    setMessage('');
    let response = (await createChatCompletion(updatedMessages)).choices[0]?.message;
    setMessages([...updatedMessages, response]);
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-10 container mx-auto pl-4 pt-6 pr-4">
      <div className="flex flex-col gap-3 h-[75%] overflow-scroll w-full">
        {
          messages.map((message) => (
          <div
            key={''}
            className={ message.role === 'user' ? 'chat chat-start' : 'chat chat-end'}
          >
            <div className="chat-bubble">
              <p>{message.content}</p>
            </div>
          </div>
          ))
        }
      </div>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === 'Enter') {
            await handleMessage();
          }
        }}
        className="input input-bordered w-full m-10"
      />
    </div>
  );
}
