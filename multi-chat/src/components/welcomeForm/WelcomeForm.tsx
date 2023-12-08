import React, { useState } from "react";
import UIButton from "../UIButton/UIButton.tsx";
import "./welcome-form.scss";
import { Router, useNavigate } from "react-router";
import useName from "../../store/name/name.ts";

const WelcomeForm: React.FC = () => {
  const username = useName((state) => state.username);
  const updateUserName = useName((state) => state.updateName);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username) {
      navigate("/chat");
    } else {
      alert("Please fill the name field");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="welcome-form">
      <label htmlFor="username">Write your name</label>
      <input
        id="username"
        placeholder="My name is"
        name="username"
        type="text"
        autoComplete="off"
        value={username}
        onChange={handleChange}
      />
      <UIButton text="submit" />
    </form>
  );
};

export default WelcomeForm;
