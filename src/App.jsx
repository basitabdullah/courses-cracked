import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import "./styles/Global.scss"
import Donate from './pages/Donate/Donate'
import Chatgtp from "./pages/Chatgtp/Chatgtp";
import Youtube from "./pages/Youtube/Youtube";
import Time from "./pages/Time/Time";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/chatgtp" element={<Chatgtp />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </Router>
  );
}

export default App