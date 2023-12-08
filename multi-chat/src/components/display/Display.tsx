import React, { useEffect } from "react";
import "./display.scss";
import { io, Socket } from "socket.io-client";
import Message from "../message/Message.tsx";
import useName from "../../store/name/name.ts";
import useAllMessages from "../../store/allMessages/allMessages";

const socket: Socket = io("http://localhost:5001");

const Display = () => {
  const { username, id } = useName((state) => state);
  const allMessages = useAllMessages((state) => state.allMessages);
  const addMessage = useAllMessages((state) => state.addMessage);

  useEffect(() => {
    socket.emit("join", { username, id });
  }, []);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      addMessage(data);
    });
  }, []);

  return (
    <div className="display">
      {allMessages.map((data) => {
        return (
          <Message
            key={crypto.randomUUID()}
            name={data.currentUser.username}
            message={data.message}
            date={data.date}
          />
        );
      })}
    </div>
  );
};

export default Display;
