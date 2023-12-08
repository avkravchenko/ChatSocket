import React from "react";
import "../UIButton/ui-button.scss";

type Props = {
  text: string;
};

const UIButton = (props: Props) => {
  return <button className="ui-button">{props.text}</button>;
};

export default UIButton;
