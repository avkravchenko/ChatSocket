import React from "react";
import "../message/message.scss";
import useName from "../../store/name/name.ts";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

type Props = {
  name: string;
  message: string;
  date: any;
};

const Message = (props: Props) => {
  const username = useName((state) => state.username);
  const isCurrentUser = username === props.name;
  const dateObj = dayjs(props.date);

  return (
    <div className={`message ${isCurrentUser ? "align-right" : ""}`}>
      <span className="name">{props.name}</span>
      <p>{props.message}</p>
      <span className="date">{dateObj.format("DD.MM.YY hh:mm")}</span>
    </div>
  );
};

export default Message;
