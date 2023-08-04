import "./App.css";
import Header from "./components/Header/Header";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={[<Header backButton="/chat" />, <ChatScreen />]} />
          <Route path="/chat" element={[<Header backButton="/" />, <Chats/>]} />
          <Route path="/" element={[<Header />, <TinderCards/>, <SwipeButtons/>]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
