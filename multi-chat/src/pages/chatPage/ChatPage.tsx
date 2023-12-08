import React from "react";
import Header from "../../components/header/Header.jsx";
import Display from "../../components/display/Display.tsx";
import MessageInput from "../../components/userInput/MessageInput.tsx";

const ChatPage = () => {
  return (
    <>
      <Header />
      <Display />
      <MessageInput />
    </>
  );
};

export default ChatPage;
