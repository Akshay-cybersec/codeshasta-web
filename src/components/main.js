import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Leftdiv from "./leftdiv";
import Home from "./Home";
import Course from "./course";
import Managecourses from "./managecourses";
import Certificate from "./certificate";
import Profile from "./profile";
import Transaction from "./transaction";
import Wallet from "./wallet";

function Main() {
  return (
    <div className="maindiv">
      <BrowserRouter>
        <Leftdiv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/managecourse" element={<Managecourses />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
