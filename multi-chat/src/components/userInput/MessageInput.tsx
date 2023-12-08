import React, { useState } from "react";
import "./message-input.scss";
import UIButton from "../UIButton/UIButton.tsx";
import useAllMessages from "../../store/allMessages/allMessages";
import { Socket, io } from "socket.io-client";
import useName from "../../store/name/name.ts";

const socket: Socket = io("http://localhost:5001");

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const id = useName((state) => state.id);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    socket.emit("sendMessage", { message, id });
    setMessage("");
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
  };

  return (
    <form className="message-input-wrapper" onSubmit={handleSubmit}>
      <input
        className="message-input"
        type="text"
        placeholder="type your message here"
        onChange={handleChange}
        value={message}
      />
      <UIButton text="send" />
    </form>
  );
};

export default MessageInput;
