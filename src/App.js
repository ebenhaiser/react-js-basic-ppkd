import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";
import User from "./User";
import Home from "./Home";
import Login from "./Login";
import Message from "./Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
