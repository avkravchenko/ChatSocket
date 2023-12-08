import React from "react";
import "./welcome-page.scss";
import WelcomeForm from "../../components/welcomeForm/WelcomeForm.tsx";

type Props = {};

const WelcomePage = (props: Props) => {
  return (
    <div className="welcome-page">
      <WelcomeForm />
    </div>
  );
};

export default WelcomePage;
