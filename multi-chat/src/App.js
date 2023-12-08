import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcomePage/WelcomePage.tsx";
import ChatPage from "./pages/chatPage/ChatPage.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
