import React from "react";
import "../header/header.scss";
import useAllMessages from "../../store/allMessages/allMessages";

const Header = () => {
  const sort = useAllMessages((state) => state.sort);
  const updateSort = useAllMessages((state) => state.updateSort);
  const sortMessages = useAllMessages((state) => state.sortMessages);

  const handleClick = () => {
    updateSort();
    sortMessages();
  };
  return (
    <header className="header">
      <h1>Chat with friends</h1>
      <p className="sort" onClick={handleClick}>
        sort messages by date{" "}
        <span className="sort-order">
          {sort ? "from old to new" : "from new to old"}
        </span>
      </p>
    </header>
  );
};

export default Header;
