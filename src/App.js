import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main.js";
import Psychological from "./Components/Services/Psychological.js";
import Physical from "./Components/Services/Physical.js";
import Academic from "./Components/Services/Academic.js";
import Emotional from "./Components/Services/Emotional.js";
import Mood from "./Components/Services/Mood.js";
import SocialProblems from "./Components/Services/SocialProblems.js";
import Contact from "./Components/Contact.js";
import LoginComponent from "./Components/Login/Login.js";
import Account from "./Components/Account/Account.js"
import LoadingBar from 'react-top-loading-bar';

function AppContent() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(1);  // Start loading on route change
    const timer = setTimeout(() => setProgress(100), 200); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <LoadingBar color="#0d0204" height={3} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main key={'main'}/>} />
        <Route exact path="/home" element={<Main key={'home'}/>} />
        <Route exact path="/psychological" element={<Psychological key={'Psychological'}/>} />
        <Route exact path="/physical" element={<Physical key={'Physical'}/>} />
        <Route exact path="/academic" element={<Academic key={'Academic'} />} />
        <Route exact path="/emotional" element={<Emotional key={'Emotional'}/>} />
        <Route exact path="/mood" element={<Mood key={'Mood'}/>} />
        <Route exact path="/socialProblems" element={<SocialProblems key={'SocialProblems'}/>} />
        <Route exact path="/login" element={<LoginComponent key={'login'}/>} />
        <Route exact path="/contact" element={<Contact key={'Contact'}/>} />
        <Route exact path="/account" element={<Account key={'Account'}/>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
