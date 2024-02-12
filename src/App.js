import { useState } from "react";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Routes, Route, } from "react-router-dom";
import Profile from "./components/Profile";
import ContactList from "./components/ContactList";
import Signup from "./components/Signup";

export default function App() {

  return (
    <>
     <Navbar />
     <Routes>
     <Route path="/" element={<Hero />}/>
     <Route path="/home" element={<Hero />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/profile" element={<Profile />}/>
     <Route path="/contacts" element={<ContactList />}/>
     <Route path="/signup" element={<Signup />}/>
     
     
     </Routes>
    </>
  )
}
